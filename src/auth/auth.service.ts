import {
  BadRequestException,
  Injectable,
  NotAcceptableException,
} from '@nestjs/common';
import { randomBytes, scrypt as _scrypt } from 'crypto';
import { UserService } from 'src/users/users.service';
import { promisify } from 'util';
const scrypt = promisify(_scrypt);

@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}

  async signup(email: string, password: string) {
    const users = await this.userService.findOne(email);
    if (users) {
      throw new BadRequestException('Email ALready Exists');
    }
    const salt = randomBytes(8).toString('hex');

    const hash = scrypt(password, salt, 32) as unknown as Buffer;

    const result = salt + '.' + hash.toString('hex');

    const user = await this.userService.create(email, result);
    return user;
  }

  async signin(email: string, password: string) {
    const user = await this.userService.findOne(email);
    if (!user) {
      throw new NotAcceptableException();
    }

    const [salt, storedHash] = user.password.split('.');
    const hash = scrypt(password, salt, 32) as unknown as Buffer;

    if (storedHash !== hash.toString('hex')) {
      throw new BadRequestException('Password in Wrong');
    }
    console.log('User Logged in');
    return user;
  }
}
