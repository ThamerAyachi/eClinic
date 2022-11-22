import { Type } from 'class-transformer';
import { EmergencyContactCreateDto } from 'src/shared/dto/EmergencyContactCreate.dto';
import { MedicalInformationCreateDto } from 'src/shared/dto/MedicalInformationCreate.dto';
import { ProfileCreateDto } from 'src/shared/dto/ProfileCreate.dto';

export class PatientCreateDto {
  @Type(() => ProfileCreateDto)
  profile: ProfileCreateDto;

  @Type(() => EmergencyContactCreateDto)
  emergencyContact: EmergencyContactCreateDto;

  @Type(() => MedicalInformationCreateDto)
  medicalInformation: MedicalInformationCreateDto;
}
