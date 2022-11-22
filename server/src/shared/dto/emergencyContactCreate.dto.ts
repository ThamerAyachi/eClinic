import {
  IsNotEmpty,
  IsNumberString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class EmergencyContactCreateDto {
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
  @IsNumberString()
  phoneNumber: number;

  @IsNotEmpty()
  @IsNumberString()
  mobileNumber: number;
}
