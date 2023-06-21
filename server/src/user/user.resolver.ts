import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UserService } from './user.service';
import { CreateUserInput } from './dto/create-user.input';
import { User } from './user.schema';

@Resolver(() => User)
export class UserResolver {
  constructor(private userService: UserService) {}

  @Query(() => [User])
  async getAllUsers(): Promise<User[]> {
    const users = await this.userService.getAllUsers();
    if (!users) {
      throw new Error('No users found');
    }
    return users;
  }

  @Query(() => User)
  async getUserById(@Args('id') id: string): Promise<User> {
    return this.userService.getUserById(id);
  }

  @Mutation(() => User)
  async createUser(@Args('input') input: CreateUserInput): Promise<User> {
    console.log(input);
    return this.userService.createUser(input);
  }
}
