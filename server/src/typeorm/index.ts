import { DoctorEntity } from './DoctorEntity';
import { EmergencyContactEntity } from './EmergencyContactEntity';
import { MedicalInformationEntity } from './MedicalInformationEntity';
import { PatientEntity } from './PatientEntity';
import { ProfileEntity } from './ProfileEntity';

const entities = [
  PatientEntity,
  EmergencyContactEntity,
  ProfileEntity,
  DoctorEntity,
  MedicalInformationEntity,
];

export default entities;
