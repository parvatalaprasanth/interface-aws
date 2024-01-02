import { IsString, IsEmail, MinLength, MaxLength } from 'class-validator';

export class MessageDto {
  @IsString()
  @MinLength(3)
  readonly username: string;

  @IsString()
  @MinLength(3)
  @MaxLength(15)
  readonly content: string;

  @IsEmail()
  readonly email: string;
}
