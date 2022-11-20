import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsNumberString,
  MaxLength,
  MinLength,
} from 'class-validator';
import BloodGroup from '../modulus/BloodGroup';
import Gender from '../modulus/Gender';

export class ProfileCreateDto {
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(100)
  title: string;

  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(20)
  familyName: string;

  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(20)
  givenName: string;

  @IsNotEmpty()
  @IsEnum(Gender)
  gender: Gender;

  @IsNotEmpty()
  birthDate: Date;

  @IsNotEmpty()
  @IsEmail()
  @MaxLength(50)
  emailAddress: string;

  @IsNotEmpty()
  @IsNumberString()
  phoneNumber: number;

  @IsNotEmpty()
  @IsNumberString()
  mobileNumber: number;

  @IsNotEmpty()
  address: string;

  @IsNotEmpty()
  @IsNumberString()
  postCode: number;

  @IsNotEmpty()
  @IsEnum(BloodGroup)
  bloodGroup: BloodGroup;

  @IsNotEmpty()
  pictureUrl: string;
}
