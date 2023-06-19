import {
  Controller,
  Post,
  Get,
  Request,
  Body,
  Session,
  BadRequestException,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from '../users/dtos/create-user.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/signup')
  async createUser(@Body() body: CreateUserDto, @Session() session: any) {
    console.log(body);
    const user = await this.authService.signup(body.email, body.password);
    //session.userId = user.id;
    console.log('sign up from auth Controller');
    return user;
  }

  @Post('/signin')
  async signin(@Body() body: CreateUserDto, @Session() Session: any) {
    const user = await this.authService.signin(body.email, body.password);
    if (!user) {
      throw new BadRequestException('Email or password is not correct');
    }
    //Session.id = user.id;
    return user;
  }

  @Post('/signout')
  signOut(@Session() session: any) {
    session.userId = null;
    console.log('User just sign Out');
  }
}
