import { PartialType } from '@nestjs/mapped-types';
import { IsEmail, IsEmpty, IsString, IsStrongPassword } from 'class-validator';

import codes from 'src/constants/codes';
import { getPasswordRules } from 'src/utils/objects';

export class UserDTO {
  @IsString()
  id: string;

  @IsString({ message: codes.nameIsInvalid })
  name: string;

  @IsEmail({}, { message: codes.emailIsInvalid })
  email: string;

  @IsStrongPassword(getPasswordRules({ minLength: 8 }), { message: codes.passwordtooShort })
  @IsStrongPassword(getPasswordRules({ minNumbers: 1 }), { message: codes.passwordMinNumbers })
  @IsStrongPassword(getPasswordRules({ minUppercase: 1 }), { message: codes.passwordMinUppercase })
  password: string;
}

export class UserCreateDTO extends UserDTO {
  @IsEmpty({ message: codes.idIsInvalid })
  id: string;
}

export class UserPatchDTO extends PartialType(UserDTO) {}
