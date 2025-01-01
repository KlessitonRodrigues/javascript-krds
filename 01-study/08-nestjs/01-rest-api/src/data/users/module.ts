import { Module } from '@nestjs/common';
import { UserController } from './controller';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [],
  exports: [],
})
export class UserModule {}
