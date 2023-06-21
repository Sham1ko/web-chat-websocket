import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserInput } from './dto/create-user.input';
import { User, UserDocument } from './user.schema';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async getAllUsers(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  async getUserByEmail(email: any): Promise<User> {
    const user = await this.userModel.findOne(email).exec();
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }

  async createUser(input: CreateUserInput): Promise<User> {
    const email = input.email;
    const foundUser = await this.userModel.findOne({ email });
    if (foundUser) throw new Error('Email is already in use');

    const newUser = new this.userModel(input);
    return newUser.save();
  }
}
