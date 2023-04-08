import { Overwrite } from 'utility-types';
import type { Channel } from '@gradual/backend/src/modules/channel/channel.schema';

export type ChannelItem = Overwrite<Channel, { _id: string }>;
