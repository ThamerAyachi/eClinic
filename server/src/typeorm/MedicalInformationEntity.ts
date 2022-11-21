import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'medical_information' })
export class MedicalInformationEntity {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column()
  allergies: boolean;

  @Column()
  bleed: boolean;

  @Column({ name: 'heart_diseases' })
  heartDiseases: boolean;

  @Column({ name: 'hight_blood_pressure' })
  highBloodPressure: boolean;

  @Column()
  accident: boolean;

  @Column()
  diabetic: boolean;

  @Column()
  surgeries: boolean;

  @Column({ type: 'longtext', nullable: true })
  others: string;

  @Column()
  infection: boolean;

  @Column({ name: 'family_medical_history', type: 'longtext', nullable: true })
  familyMedicalHistory: string;

  @Column({ type: 'longtext', nullable: true })
  medications: string;

  @Column()
  assurance: boolean;

  @Column({ name: 'work_cover' })
  workCovered: boolean;

  @Column({ name: 'other_case', type: 'longtext', nullable: true })
  otherCase: string;

  @Column()
  subscription: boolean;
}
