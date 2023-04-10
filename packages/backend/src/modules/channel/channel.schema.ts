import { ObjectType, Field } from '@nestjs/graphql';
import { Schema as MongooseSchema } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { User } from '../user/user.schema';
import { ChannelType } from './channel.type';

@Schema()
@ObjectType()
export class Channel {
  /**
   * channelId
   */
  @Field(() => String)
  _id: MongooseSchema.Types.ObjectId;

  /**
   * the title of this channel
   * if channel.type === ChannelType.user, this title will be empty
   * and the frontend will use user's name as title
   */
  @Prop()
  @Field(() => String, { description: 'channel title' })
  title: string;

  /**
   * channel's type
   */
  @Prop()
  @Field(() => Number, { description: 'channel type' })
  type: ChannelType;

  /**
   * userId list, includes the users of this channel
   */
  @Prop()
  @Field(() => [String], { description: "channel's user id" })
  userIds: string[];

  /**
   * virtual field
   * associate with collection user
   */
  @Field(() => [User], { description: "channel's users" })
  users: User[];
}

export const ChannelSchema = SchemaFactory.createForClass(Channel);
