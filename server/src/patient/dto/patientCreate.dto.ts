import { EmergencyContactCreateDto } from 'src/shared/dto/emergencyContactCreate.dto';
import { ProfileCreateDto } from 'src/shared/dto/profileCreate.dto';

export class PatientCreateDto {
  profile: ProfileCreateDto;

  emergencyContact: EmergencyContactCreateDto;
}
