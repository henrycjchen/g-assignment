import { useState, useSyncExternalStore } from 'react';
import { getSearchParams } from '@/utils/url';
import Item from './components/Item';
import Search from './components/Search';
import { useChannels } from '@/hooks/channel.hook';

export default function ChannelList() {
  const [activeIndex, setActiveIndex] = useState(1);
  const [channels] = useChannels();

  function handleClick(index: number) {
    setActiveIndex(index);
  }

  return (
    <div className="flex flex-shrink-0 flex-col h-100% w-340px bg-channel-list overflow-scroll">
      <Search />
      {channels.map((item, index) => (
        <div key={index} onClick={() => handleClick(index)}>
          <Item data={item} isActive={index === activeIndex} />
        </div>
      ))}
    </div>
  );
}
