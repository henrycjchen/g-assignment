import ChannelList from './channel-list/index';
import ChannelContent from './channel-content/index';
import { ChannelItem } from '@/types/channel.type';
import { useState } from 'react';

export default function Channel() {
  const [channel, setChannel] = useState<ChannelItem>();

  function onChannelClick(channel: ChannelItem) {
    setChannel(channel);
  }

  return (
    <>
      <ChannelList onClick={onChannelClick} />
      <ChannelContent channel={channel} />
    </>
  );
}
