import { useEffect, useState } from 'react';
import { getUser } from '@/apis/user.api';
import { UserItem } from '@/types/user.type';

export function useUser(userId: string) {
  const [user, setUser] = useState<UserItem>();

  useEffect(() => {
    getUser(userId).then((res) => {
      setUser(res);
    });
  }, [userId]);

  return [user];
}
