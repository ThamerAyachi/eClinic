import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { EmergencyContactEntity } from './EmergencyContactEntity';
import { ProfileEntity } from './ProfileEntity';

@Entity({ name: 'doctor' })
export class DoctorEntity {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ type: 'datetime', name: 'create_at' })
  createAt: Date;

  @Column({ type: 'datetime', name: 'update_at' })
  updateAt: Date;

  @OneToOne(() => ProfileEntity)
  @JoinColumn()
  profile: ProfileEntity;

  @OneToOne(() => EmergencyContactEntity)
  @JoinColumn()
  emergencyContact: EmergencyContactEntity;
}
