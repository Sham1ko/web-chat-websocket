import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UserService } from './user.service';
import { CreateUserInput } from './dto/create-user.input';
import { User } from './user.schema';
import { Logger } from '@nestjs/common';

@Resolver(() => User)
export class UserResolver {
  constructor(private userService: UserService) {}

  @Query(() => [User])
  async getAllUsers() {
    return await this.userService.getAllUsers();
  }

  @Query(() => User)
  async getUser(@Args('email') email: string): Promise<User> {
    return this.userService.getUserByEmail(email);
  }

  @Mutation(() => User)
  async createUser(@Args('createUser') createUserInput: CreateUserInput) {
    return await this.userService.createUser(createUserInput);
  }
}
