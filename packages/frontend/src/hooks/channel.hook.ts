import { useEffect, useState } from 'react';
import { getChannels } from '@/apis/channel.api';
import { ChannelItem, MessageInfo } from '@/types/channel.type';
import { ChannelType } from '@gradual/backend/src/modules/channel/channel.type';
import { userId } from '@/store/user.store';
import { socketOnChannel } from '@/utils/request';
import { useLatest, useLocalStorage } from 'react-use';

function useMessageMap(): [typeof messageMap, typeof storeMessage] {
  const [messageMap, setMessageMap] = useLocalStorage(
    `${userId}-messageMap`,
    {} as Record<string, MessageInfo[]>
  );
  const latestMessageMap = useLatest(messageMap);

  function storeMessage({
    channelId,
    message,
  }: {
    channelId: string;
    message: MessageInfo;
  }) {
    setMessageMap({
      ...latestMessageMap.current,
      [channelId]: [...(latestMessageMap.current?.[channelId] || []), message],
    });
  }

  return [messageMap, storeMessage];
}

function useUnreadCountMap(): [
  typeof unreadCountMap,
  typeof increaseCount,
  typeof clearCount
] {
  const [unreadCountMap, setUnreadCountMap] = useLocalStorage(
    `${userId}-unreadCountMap`,
    {} as Record<string, number>
  );
  const latestUnreadCountMap = useLatest(unreadCountMap);

  function increaseCount({ channelId }: { channelId: string }) {
    setUnreadCountMap({
      ...latestUnreadCountMap.current,
      [channelId]: (latestUnreadCountMap.current?.[channelId] || 0) + 1,
    });
  }

  function clearCount(channelId: string) {
    setUnreadCountMap({
      ...latestUnreadCountMap.current,
      [channelId]: 0,
    });
  }

  return [unreadCountMap, increaseCount, clearCount];
}

export function useChannels(): [
  ChannelItem[],
  Record<string, MessageInfo[]>,
  Record<string, number>,
  typeof clearCount
] {
  const [channels, setChannels] = useState([] as ChannelItem[]);

  const [messageMap, storeMessage] = useMessageMap();

  const [unreadCountMap, increaseCount, clearCount] = useUnreadCountMap();

  useEffect(() => {
    (async () => {
      const result = await getChannels(userId);
      setChannels(result);

      result.forEach((c) => {
        socketOnChannel(c._id, (message) => {
          if (c._id !== message.channelId) return;
          storeMessage({ message, channelId: c._id });
          if (message.userId !== userId) {
            increaseCount({ channelId: c._id });
          }
        });
      });
    })();
  }, [userId]);

  return [
    channels,
    messageMap as Record<string, MessageInfo[]>,
    unreadCountMap as Record<string, number>,
    clearCount,
  ];
}

export function useMessages(channelId: string) {
  const [messages, setMessages] = useState<MessageInfo[]>([]);

  useEffect(() => {
    if (!channelId) return;
    socketOnChannel(channelId, (message) => {
      if (channelId !== message.channelId) return;
      setMessages((pre) => [...pre, message]);
    });
  }, [channelId]);

  return [messages];
}

export function useChannelTitle(channel: ChannelItem) {
  const [title] = useState(channel.title);

  if (channel.type === ChannelType.User) {
    channel.title =
      channel.users.find((user) => (user._id as unknown as string) !== userId)
        ?.name || '';
  }

  return title;
}
