import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EmergencyContactEntity } from 'src/typeorm/EmergencyContactEntity';
import { MedicalInformationEntity } from 'src/typeorm/MedicalInformationEntity';
import { PatientEntity } from 'src/typeorm/PatientEntity';
import { ProfileEntity } from 'src/typeorm/ProfileEntity';
import { Repository } from 'typeorm';
import { PatientCreateDto } from '../dto/PatientCreate.dto';

@Injectable()
export class PatientService {
  constructor(
    @InjectRepository(PatientEntity)
    private readonly PatientRepo: Repository<PatientEntity>,
    @InjectRepository(ProfileEntity)
    private readonly ProfileRepo: Repository<ProfileEntity>,
    @InjectRepository(EmergencyContactEntity)
    private readonly EmergencyContactRepo: Repository<EmergencyContactEntity>,
    @InjectRepository(MedicalInformationEntity)
    private readonly MedicalInformationRepo: Repository<MedicalInformationEntity>,
  ) {}

  async createPatient(patientCreateDto: PatientCreateDto) {
    return { message: 'Done', patient: patientCreateDto };
  }
}
