import { IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateGestionCursosDto {


  @IsNumber()
  @IsOptional()
  codigo?: number;

  @IsString()
  @IsOptional()
  titulo?: string;
  
  @IsString()
  @IsOptional()
  subtitulo?: string;

  @IsString()
  @IsOptional()
  descripcion?: string;

  @IsString()
  @IsOptional()
  nivel?: string;

  @IsNumber()
  @IsOptional()
  duracion_horas?: number;

  @IsNumber()
  @IsOptional()
  costo?: number;

  @IsString()
  @IsOptional()
  modalidad?: string;

  @IsString()
  @IsOptional()
  fecha_inicio?: string;

  @IsString()
  @IsOptional()
  estado?: string;
  
}
