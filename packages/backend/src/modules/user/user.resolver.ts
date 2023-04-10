import { Resolver, Query, Args } from '@nestjs/graphql';
import { UserService } from './user.service';
import { User } from './user.schema';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  /**
   * get all users
   */
  @Query(() => [User], { name: 'users' })
  findAll() {
    return this.userService.findAll();
  }

  /**
   * get one user by userId
   */
  @Query(() => User, { name: 'user' })
  findOne(@Args('_id', { type: () => String }) id: string) {
    return this.userService.findOne(id);
  }
}
