import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmergencyContactEntity } from 'src/typeorm/EmergencyContactEntity';
import { MedicalInformationEntity } from 'src/typeorm/MedicalInformationEntity';
import { PatientEntity } from 'src/typeorm/PatientEntity';
import { ProfileEntity } from 'src/typeorm/ProfileEntity';
import { PatientController } from './controllers/patient.controller';
import { PatientService } from './services/patient.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      PatientEntity,
      ProfileEntity,
      MedicalInformationEntity,
      EmergencyContactEntity,
    ]),
  ],
  controllers: [PatientController],
  providers: [PatientService],
})
export class PatientModule {}
