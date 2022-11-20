import { Module } from '@nestjs/common';
import { UsersController } from './users/controllers/users.controller';
import { UsersModule } from './users/users.module';
import { UsersService } from './users/services/users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { typeOrmConfigAsync } from './config/typeorm.config';
import { PatientModule } from './patient/patient.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync(typeOrmConfigAsync),
    UsersModule,
    PatientModule,
  ],
  controllers: [UsersController],
  providers: [UsersService],
})
export class AppModule {}
