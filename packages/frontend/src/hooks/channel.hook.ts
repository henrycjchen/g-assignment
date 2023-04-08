import { useEffect, useState } from 'react';
import { getChannels } from '@/apis/channel.api';
import { getSearchParams } from '@/utils/url';
import { ChannelItem } from '@/types/channel.type';

// const channels = [
//   {
//     _id: '642d774097efefb12fcc0ec7',
//     type: 1,
//     users: ['642cdfe297efefb12fcc0eb7', '642b6f0a97efefb12fcc0e9f'],
//     title: '',
//   },
//   {
//     _id: '642d784097efefb12fcc0ed1',
//     type: 1,
//     users: ['642b6fc697efefb12fcc0ea0', '642cdfe297efefb12fcc0eb7'],
//     title: '',
//   },
// ];

export function useChannels() {
  const [channels, setChannels] = useState([] as ChannelItem[]);
  const userId = getSearchParams('userId') || '';

  useEffect(() => {
    getChannels(userId).then((result) => {
      console.log('result', result);
      setChannels(result);
    });
  }, [userId]);

  return [channels];
}
