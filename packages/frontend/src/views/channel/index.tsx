import ChannelList from './channel-list/index';
import ChannelContent from './channel-content/index';
import { useEffect, useState } from 'react';
import { useChannels } from '@/hooks/channel.hook';

export default function Channel() {
  const [channels, messageMap, unreadCountMap, crearUnreadCount] =
    useChannels();
  const [index, setIndex] = useState(-1);

  function onClick(index: number) {
    setIndex(index);
  }

  useEffect(() => {
    if (channels[index]?._id) {
      crearUnreadCount(channels[index]._id);
    }
  }, [channels[index], messageMap]);

  return (
    <>
      <ChannelList
        onClick={onClick}
        channels={channels}
        messageMap={messageMap}
        unreadCountMap={unreadCountMap}
      />
      <ChannelContent
        channel={channels[index]}
        messages={messageMap[channels[index]?._id] || []}
      />
    </>
  );
}
