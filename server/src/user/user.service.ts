import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { User } from './user.schema';

@Injectable()
export class UserService {
  private users: User[] = [];

  getAllUsers(): User[] {
    return this.users;
  }

  getUserById(id: string): User {
    const user = this.users.find((user) => user.id === id);
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }

  createUser(input: CreateUserInput): User {
    const newUser: User = {
      id: (this.users.length + 1).toString(),
      name: input.name,
      email: input.email,
    };
    this.users.push(newUser);
    return newUser;
  }
}
