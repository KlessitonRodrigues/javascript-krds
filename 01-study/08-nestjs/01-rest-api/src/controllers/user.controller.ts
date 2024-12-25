import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import codes from 'src/constants/codes';
import { CreateUserDTO } from 'src/dto/user.dto';

@Controller('users')
export class UserController {
  private users: CreateUserDTO[] = [
    { id: '1', name: 'user1', email: 'user1@gmail.com', password: '123' },
    { id: '2', name: 'user2', email: 'user2@gmail.com', password: '123' },
    { id: '3', name: 'user3', email: 'user3@gmail.com', password: '123' },
  ];

  @Get()
  async findAll() {
    return this.users;
  }

  @Get(':id')
  async findOne(@Param() params) {
    const { id } = params;
    return this.users.find((user) => user.id === String(id));
  }

  @Post()
  async create(@Body() body: CreateUserDTO) {
    console.log(body);

    body.id = Math.random().toString(16).slice(2);
    this.users.push(body);
    return this.users;
  }

  @Put()
  async update(@Body() body) {
    const { id } = body;
    const index = this.users.findIndex((user) => user.id === String(id));
    if (index < 0) throw new Error(codes.idNotFound);
    this.users[index] = body;
    return this.users;
  }
}
