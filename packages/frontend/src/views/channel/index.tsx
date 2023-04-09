import ChannelList from './channel-list/index';
import ChannelContent from './channel-content/index';
import { ChannelItem, MessageInfo } from '@/types/channel.type';
import { useState } from 'react';
import { useChannels } from '@/hooks/channel.hook';

export default function Channel() {
  const [channels, messageMap] = useChannels();
  const [index, setIndex] = useState(-1);

  function onClick(index: number) {
    setIndex(index);
  }

  return (
    <>
      <ChannelList
        onClick={onClick}
        channels={channels}
        messageMap={messageMap}
      />
      <ChannelContent
        channel={channels[index]}
        messages={messageMap[channels[index]?._id] || []}
      />
    </>
  );
}
