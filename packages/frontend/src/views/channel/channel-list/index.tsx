import { useState, useSyncExternalStore } from 'react';
import { getSearchParams } from '@/utils/url';
import Item from './components/Item';
import Search from './components/Search';
import { useChannels } from '@/hooks/channel.hook';
import { ChannelItem, MessageInfo } from '@/types/channel.type';

export default function ChannelList({
  channels,
  messageMap,
  onClick,
}: {
  channels: ChannelItem[];
  messageMap: Record<string, MessageInfo[]>;
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
          isActive={index === activeIndex}
          onClick={() => handleClick(index)}
        />
      ))}
    </div>
  );
}
