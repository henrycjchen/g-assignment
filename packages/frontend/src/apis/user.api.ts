import { request } from '../utils/request';
import { UserItem } from '@/types/user.type';

const query = `query User($userId: String!) {
  user(_id: $userId) {
    _id,
    name,
    avatar,
  }
}`;

export async function getUser(userId: string): Promise<UserItem> {
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
  return res.data.user;
}
