import { IsNotEmpty } from 'class-validator';

export class MedicalInformationCreateDto {
  @IsNotEmpty()
  allergies: boolean;

  @IsNotEmpty()
  bleed: boolean;

  @IsNotEmpty()
  heartDiseases: boolean;

  @IsNotEmpty()
  highBloodPressure: boolean;

  @IsNotEmpty()
  accident: boolean;

  @IsNotEmpty()
  diabetic: boolean;

  @IsNotEmpty()
  surgeries: boolean;

  other: string;

  @IsNotEmpty()
  infection: boolean;

  familyMedicalHistory: string;

  @IsNotEmpty()
  medications: string;

  @IsNotEmpty()
  assurance: boolean;

  @IsNotEmpty()
  workCovered: boolean;

  otherCase: string;

  @IsNotEmpty()
  subscription: boolean;
}
