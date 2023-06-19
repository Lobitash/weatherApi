import {
  Controller,
  Body,
  Get,
  Patch,
  Param,
  Delete,
  NotFoundException,
} from '@nestjs/common';
import { UserService } from './users.service';
import { CreateUserDto } from './dtos/create-user.dto';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Get('/')
  async findAllUsers() {
    return this.userService.findAll();
  }

  @Get('/:id')
  async findUser(@Param('id') id: string) {
    const user = await this.userService.findById(parseInt(id));
    if (!user) {
      throw new NotFoundException('User Not Found');
    }
    return user;
  }

  @Delete('/:id')
  async deleteUser(@Param('id') id: string) {
    return this.userService.delete(parseInt(id));
  }

  @Patch('/:id')
  async updateUser(@Param('id') id: string, @Body() body: CreateUserDto) {
    return this.userService.update(parseInt(id), body);
  }
}
