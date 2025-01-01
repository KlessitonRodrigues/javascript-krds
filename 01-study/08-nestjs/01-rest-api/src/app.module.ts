import { Module } from '@nestjs/common';
import { UserModule } from './data/users/module';

@Module({
  imports: [UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
