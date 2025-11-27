import { IsString } from 'class-validator';

export class CreateGestionCursosDto {
  @IsString()
  name: string;
}
