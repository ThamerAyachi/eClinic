import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'patient' })
export class PatientEntity {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column({ nullable: false })
  title: string;

  @Column({ nullable: false, name: 'family_name' })
  familyName: string;

  @Column({ nullable: false, name: 'givin_name' })
  givenName: string;

  @Column({ nullable: false })
  gender: string;

  @Column({ nullable: false, name: 'birth_date' })
  birthDate: Date;

  @Column({ nullable: false })
  emailAddress: string;

  @Column({ nullable: false, name: 'phone_number' })
  phoneNumber: number;

  @Column({ nullable: false, name: 'mobile_number' })
  mobileNumber: number;

  @Column({ nullable: false })
  address: string;

  @Column({ nullable: false, name: 'post_code' })
  postCode: number;

  @Column({ nullable: false, name: 'blood_group' })
  bloodGroup: string;

  @Column({ nullable: false, name: 'picture_url' })
  pictureUrl: string;
}
