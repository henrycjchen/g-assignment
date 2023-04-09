import React, { useEffect, useState } from 'react';
import { getChannels } from '@/apis/channel.api';
import { getSearchParams } from '@/utils/url';
import { ChannelItem, MessageInfo } from '@/types/channel.type';
import { ChannelType } from '@gradual/backend/src/modules/channel/channel.type';
import { userId } from '@/store/user.store';
import { socket, socketOnChannel } from '@/utils/request';
import { useEffectOnce } from 'react-use';

export function useChannels(): [ChannelItem[], Record<string, MessageInfo[]>] {
  const [channels, setChannels] = useState([] as ChannelItem[]);
  const [messageMap, setMessageMap] = useState(
    {} as Record<string, MessageInfo[]>
  );

  useEffect(() => {
    (async () => {
      const result = await getChannels(userId);
      setChannels(result);

      result.forEach((c) => {
        socketOnChannel(c._id, (message) => {
          if (c._id !== message.channelId) return;
          setMessageMap((pre) => {
            return {
              ...pre,
              [c._id]: [...(pre[c._id] || []), message],
            };
          });
        });
      });
    })();
  }, [userId]);

  return [channels, messageMap];
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
  const [title, setTitle] = useState(channel.title);

  if (channel.type === ChannelType.User) {
    channel.title =
      channel.users.find((user) => (user._id as unknown as string) !== userId)
        ?.name || '';
  }

  return title;
}
