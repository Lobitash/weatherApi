import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserController } from './users.controller';
import { UserService } from './users.service';
import { User, UserSchema } from './users.schema';
import { AuthService } from '../auth/auth.service';
import { AuthController } from '../auth/auth.controller';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'User', schema: UserSchema }])],
  controllers: [UserController, AuthController],
  providers: [UserService, AuthService],
})
export class UserModule {}
