import { IsEmail, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  id: number;

  @IsEmail()
  email: string;

  @IsString()
  password: string;
}
