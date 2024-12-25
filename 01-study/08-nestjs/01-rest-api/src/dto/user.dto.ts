import { IsEmail, IsEmpty, IsString, IsStrongPassword } from 'class-validator';
import codes from 'src/constants/codes';

export class UserDTO {
  @IsString()
  id: string;

  @IsString({ message: codes.nameIsInvalid })
  name: string;

  @IsEmail({}, { message: codes.emailIsInvalid })
  email: string;

  @IsStrongPassword({ minLength: 8 }, { message: codes.passwordtooShort })
  @IsStrongPassword({ minNumbers: 1 }, { message: codes.passwordMinNumbers })
  @IsStrongPassword({ minUppercase: 1 }, { message: codes.passwordMinUppercase })
  password: string;
}

export class CreateUserDTO extends UserDTO {
  @IsEmpty({ message: codes.idIsInvalid })
  id: string;
}
