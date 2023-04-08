import { Overwrite } from 'utility-types';
import type { User } from '@gradual/backend/src/modules/user/user.schema';

export type UserItem = Overwrite<User, { _id: string }>;

