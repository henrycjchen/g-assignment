import { ObjectType, Field } from '@nestjs/graphql';
import { Schema as MongooseSchema } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

enum ChannelType {
  User = 1,
  Group,
}

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
  users: string[];
}

export const ChannelSchema = SchemaFactory.createForClass(Channel);
