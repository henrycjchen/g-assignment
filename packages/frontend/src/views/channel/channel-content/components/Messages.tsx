import MessageItem, { Direction } from './MessageItem';
import { ChannelItem, MessageInfo } from '@/types/channel.type';
import { userId } from '@/store/user.store';
import React, { useEffect } from 'react';

export default function Messages({
  channel,
  messages,
}: {
  channel: ChannelItem;
  messages: MessageInfo[];
}) {
  const bottomEl = React.createRef<HTMLDivElement>();

  const scrollToBottom = () => {
    bottomEl.current?.scrollIntoView();
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className="flex flex-col flex-1 overflow-scroll">
      <div className="p-20px flex-1">
        {messages.map((m) => {
          return (
            <MessageItem
              key={m.messageId}
              direction={m.userId === userId ? Direction.Right : Direction.Left}
              message={m}
            />
          );
        })}
      </div>
      <div ref={bottomEl}></div>
    </div>
  );
}
