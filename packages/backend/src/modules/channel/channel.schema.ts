import { ObjectType, Field } from '@nestjs/graphql';
import { Schema as MongooseSchema } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { User } from '../user/user.schema';
import { ChannelType } from './channel.type';

@Schema()
@ObjectType()
export class Channel {
  @Field(() => String)
  _id: MongooseSchema.Types.ObjectId;

  @Prop()
  @Field(() => String, { description: 'channel title' })
  title: string;

  @Prop()
  @Field(() => Number, { description: 'channel type' })
  type: ChannelType;

  @Prop()
  @Field(() => [String], { description: "channel's user id" })
  userIds: string[];

  /**
   * 关联查询节点
   */
  @Field(() => [User], { description: "channel's users" })
  users: User[];
}

export const ChannelSchema = SchemaFactory.createForClass(Channel);
