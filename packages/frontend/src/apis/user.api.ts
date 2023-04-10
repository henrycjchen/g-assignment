import { request } from '../utils/request';
import { UserItem } from '@/types/user.type';

/**
 * graphql schema
 * get user by userId
 */
const query = `query User($userId: String!) {
  user(_id: $userId) {
    _id,
    name,
    avatar,
  }
}`;

/**
 * api: get user by userId
 */
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
