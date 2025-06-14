import { IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  name: string;
  @IsString()
  lastName: string;
  @IsString()
  email: string;
}
