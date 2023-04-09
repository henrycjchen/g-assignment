import { useState } from 'react';
import Item from './components/Item';
import Search from './components/Search';
import { ChannelItem, MessageInfo } from '@/types/channel.type';

export default function ChannelList({
  channels,
  messageMap,
  unreadCountMap,
  onClick,
}: {
  channels: ChannelItem[];
  messageMap: Record<string, MessageInfo[]>;
  unreadCountMap: Record<string, number>;
  onClick: (index: number) => void;
}) {
  const [activeIndex, setActiveIndex] = useState(-1);

  function handleClick(index: number) {
    setActiveIndex(index);
    onClick(index);
  }

  return (
    <div className="flex flex-shrink-0 flex-col h-100% w-340px bg-channel-list overflow-scroll">
      <Search />
      {channels.map((item, index) => (
        <Item
          key={index}
          channel={item}
          messages={messageMap[item._id] || []}
          unreadCount={unreadCountMap[item._id] || 0}
          isActive={index === activeIndex}
          onClick={() => handleClick(index)}
        />
      ))}
    </div>
  );
}
