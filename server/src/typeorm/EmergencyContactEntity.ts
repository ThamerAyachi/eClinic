import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { PatientEntity } from './PatientEntity';

@Entity({ name: 'emergency_contact' })
export class EmergencyContactEntity {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column()
  title: string;

  @Column({ name: 'family_name' })
  familyName: string;

  @Column({ name: 'given_name' })
  givenName: string;

  @Column({ name: 'phone_number' })
  phoneNumber: number;

  @Column({ name: 'mobile_number' })
  mobileNumber: number;
}
