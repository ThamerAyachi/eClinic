import { Injectable } from '@nestjs/common';
import { PatientCreateDto } from '../dto/PatientCreate.dto';

@Injectable()
export class PatientService {
  async createPatient(patientCreateDto: PatientCreateDto) {
    return { message: 'Done', patient: patientCreateDto };
  }
}
