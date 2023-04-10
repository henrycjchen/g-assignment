import { ioRuqest, request } from '../utils/request';
import { ChannelItem } from '@/types/channel.type';

/**
 * graphql schema
 * get channels by userId
 */
const query = `query Channels($userId: String!) {
  channels(userId: $userId) {
    _id,
    type,
    title,
    users {
        _id,
        avatar,
        name,
    }
  }
}`;

/**
 * api: get channels by userId
 */
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

/**
 * socket api: send message
 */
export function sendMessage({
  message,
  channelId,
}: {
  message: string;
  channelId: string;
}) {
  ioRuqest('message', {
    message,
    channelId,
  });
}
