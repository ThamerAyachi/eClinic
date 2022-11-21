import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { EmergencyContactEntity } from './EmergencyContactEntity';
import { MedicalInformationEntity } from './MedicalInformationEntity';
import { ProfileEntity } from './ProfileEntity';

@Entity({ name: 'patient' })
export class PatientEntity {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column({ nullable: false, type: 'datetime', name: 'create_at' })
  createAt: Date;

  @Column({ nullable: false, type: 'datetime', name: 'update_at' })
  updateAt: Date;

  @OneToOne(() => ProfileEntity)
  @JoinColumn()
  profile: ProfileEntity;

  @OneToOne(() => EmergencyContactEntity)
  @JoinColumn()
  emergencyContact: EmergencyContactEntity;

  @OneToOne(() => MedicalInformationEntity)
  @JoinColumn()
  medicalInformation: MedicalInformationEntity;
}
