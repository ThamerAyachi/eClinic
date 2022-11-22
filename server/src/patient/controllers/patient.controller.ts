import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { PatientCreateDto } from '../dto/PatientCreate.dto';
import { PatientService } from '../services/patient.service';

@Controller('patient')
export class PatientController {
  constructor(private readonly patientService: PatientService) {}

  @Post('create')
  @UsePipes(ValidationPipe)
  async createPatient(@Body() patientCreateDto: PatientCreateDto) {
    return this.patientService.createPatient(patientCreateDto);
  }
}
