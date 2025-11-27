import { IsOptional, IsString } from 'class-validator';

export class UpdateGestionCursosDto {
  @IsString()
  @IsOptional()
  name?: string;
}
