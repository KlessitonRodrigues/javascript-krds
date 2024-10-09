import {
  IsEmail,
  IsOptional,
  IsString,
  IsStrongPassword,
} from 'class-validator';

export class UserDTO {
  @IsString()
  id: string;
  @IsString()
  name: string;
  @IsEmail()
  email: string;
  @IsStrongPassword({ minLength: 6 })
  password: string;
}

export class CreateUserDTO extends UserDTO {
  @IsOptional()
  id: string;
}
