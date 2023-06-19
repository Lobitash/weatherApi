import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './users.schema';
import { CreateUserDto } from './dtos/create-user.dto';

// constructor(@InjectConnection() private connection: Connection)

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async create(email: string, password: string): Promise<User> {
    const createdUser = await this.userModel.create({ email, password });
    return createdUser.save();
  }

  async findAll() {
    const users = await this.userModel.find();
    return users;
    //What is .exec() (I need this also : : Promise<Cat>)
  }
  async findById(id: number) {
    const user = await this.userModel.findById({ _id: id });
    return user;
  }

  findOne(email: string) {
    return this.userModel.findOne({ email });
  }

  async delete(id: number) {
    return this.userModel.findByIdAndRemove(id).exec();
  }

  async update(id: number, attrs: Partial<User>) {
    return this.userModel.findByIdAndUpdate(id, attrs).exec();
  }
}
