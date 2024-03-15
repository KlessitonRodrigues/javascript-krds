import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import codes from 'src/constants/codes';

@Controller('users')
export class UserController {
  private users = [
    { id: '1', name: 'user1' },
    { id: '2', name: 'user2' },
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
  async create(@Body() body) {
    this.users.push(body);
    return this.users;
  }

  @Put()
  async update(@Body() body) {
    const { id } = body;
    const index = this.users.findIndex((user) => user.id === String(id));
    if (index < 0) throw new Error(codes.userNotFound);
    this.users[index] = body;
    return this.users;
  }
}
