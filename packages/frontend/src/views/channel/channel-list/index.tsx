import { useState, useSyncExternalStore } from 'react';
import { getSearchParams } from '@/utils/url';
import Item from './components/Item';
import Search from './components/Search';
import { useChannels } from '@/hooks/channel.hook';
import { ChannelItem } from '@/types/channel.type';

export default function ChannelList({
  onClick,
}: {
  onClick: (channelItem: ChannelItem) => void;
}) {
  const [activeIndex, setActiveIndex] = useState(-1);
  const [channels] = useChannels();

  function handleClick(index: number) {
    setActiveIndex(index);
    onClick(channels[index]);
  }

  return (
    <div className="flex flex-shrink-0 flex-col h-100% w-340px bg-channel-list overflow-scroll">
      <Search />
      {channels.map((item, index) => (
        <Item
          key={index}
          channel={item}
          isActive={index === activeIndex}
          onClick={() => handleClick(index)}
        />
      ))}
    </div>
  );
}
