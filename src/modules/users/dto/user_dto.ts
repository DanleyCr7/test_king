import { IsEmail, IsNotEmpty } from 'class-validator';

export class UserDto {
  @IsNotEmpty() id: string | number;
  @IsNotEmpty() name: string;
  @IsNotEmpty() @IsEmail() email: string;
}
