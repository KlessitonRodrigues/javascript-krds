import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { UserCreateDTO, UserPatchDTO, UserDTO } from './dto';
import codes from 'src/constants/codes';
import { getRandomStr } from 'src/utils/strings';

@Controller('users')
export class UserController {
  private users: UserCreateDTO[] = [
    { id: '1', name: 'user1', email: 'user1@gmail.com', password: '123' },
    { id: '2', name: 'user2', email: 'user2@gmail.com', password: '123' },
    { id: '3', name: 'user3', email: 'user3@gmail.com', password: '123' },
  ];

  @Get()
  async findAllUsers() {
    return this.users;
  }

  @Get(':id')
  async findOneUser(@Param() params) {
    const { id } = params;
    return this.users.find((user) => user.id === String(id));
  }

  @Post()
  async createUser(@Body() body: UserCreateDTO) {
    body.id = getRandomStr();
    this.users.push(body);
    return body;
  }

  @Put(':id')
  async updateUser(@Param() params, @Body() body: UserDTO) {
    const { id } = params;
    if (!id) throw new Error(codes.idIsInvalid);

    const index = this.users.findIndex((user) => user.id === String(id));
    if (index < 0) throw new Error(codes.idNotFound);

    this.users[index] = body;
    return this.users[index];
  }

  @Patch(':id')
  async patchUserData(@Param() params, @Body() body: UserPatchDTO) {
    const { id } = params;
    if (!id) throw new Error(codes.idIsInvalid);

    const index = this.users.findIndex((user) => user.id === String(id));
    if (index < 0) throw new Error(codes.idNotFound);

    this.users[index] = { ...this.users[index], ...body };
    return this.users[index];
  }

  @Delete(':id')
  async removeUser(@Param() params) {
    const { id } = params;
    if (!id) throw new Error(codes.idIsInvalid);

    const index = this.users.findIndex((user) => user.id === String(id));
    if (index < 0) throw new Error(codes.idNotFound);

    this.users.splice(index, 1);
    return this.users;
  }
}
