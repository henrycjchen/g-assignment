import { Overwrite } from 'utility-types';
import type { Channel } from '@gradual/backend/src/modules/channel/channel.schema';

/**
 * 接口响应的频道数据结构
 */
export type ChannelItem = Overwrite<
  Channel,
  { _id: string; userIds: string[] }
>;

/**
 * message base info
 */
export type MessageInfo = {
  message: string;
  timestamp: number;
  userId: string;
  messageId: string;
  channelId: string;
};
