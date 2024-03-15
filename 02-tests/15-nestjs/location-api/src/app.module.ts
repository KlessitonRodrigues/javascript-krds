import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { UsersModule } from './modules/users/users.module';
import { UsersService } from './services/users/users.service';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), UsersModule],
  controllers: [],
  providers: [UsersService],
})
export class AppModule {}
