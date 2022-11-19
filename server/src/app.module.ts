import { Module } from '@nestjs/common';
import { UsersController } from './users/controllers/users.controller';
import { UsersModule } from './users/users.module';
import { UsersService } from './users/services/users.service';

@Module({
  imports: [UsersModule],
  controllers: [UsersController],
  providers: [UsersService],
})
export class AppModule {}
