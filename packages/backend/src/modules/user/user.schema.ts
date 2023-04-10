import { ObjectType, Field } from '@nestjs/graphql';
import { Schema as MongooseSchema } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
@ObjectType()
export class User {
  /**
   * userId
   */
  @Field(() => String)
  _id: MongooseSchema.Types.ObjectId;

  /**
   * user's name
   */
  @Prop()
  @Field(() => String, { description: 'user name' })
  name: string;

  /**
   * user's avatar url
   */
  @Prop()
  @Field(() => String, { description: 'user avatar url' })
  avatar: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
