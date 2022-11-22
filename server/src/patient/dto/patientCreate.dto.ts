import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { EmergencyContactCreateDto } from 'src/shared/dto/EmergencyContactCreate.dto';
import { MedicalInformationCreateDto } from 'src/shared/dto/MedicalInformationCreate.dto';
import { ProfileCreateDto } from 'src/shared/dto/ProfileCreate.dto';

export class PatientCreateDto {
  @ValidateNested()
  @Type(() => ProfileCreateDto)
  profile: ProfileCreateDto;

  @ValidateNested()
  @Type(() => EmergencyContactCreateDto)
  emergencyContact: EmergencyContactCreateDto;

  @ValidateNested()
  @Type(() => MedicalInformationCreateDto)
  medicalInformation: MedicalInformationCreateDto;
}
