import { request } from '../utils/request';
import { ChannelItem } from '@/types/channel.type';

const query = `query Channels($userId: String!) {
  channels(userId: $userId) {
    _id,
    type,
    users,
    title,
  }
}`;

export async function getChannels(userId: string): Promise<ChannelItem[]> {
  const res = await request('/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      query: query,
      variables: { userId },
    }),
  });
  return res.data.channels;
}
