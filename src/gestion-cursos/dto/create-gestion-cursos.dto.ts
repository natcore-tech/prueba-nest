import { IsNumber, IsString } from 'class-validator';

export class CreateGestionCursosDto {

  @IsNumber()
  codigo: number;

  @IsString()
  titulo: string;
  
  @IsString()
  subtitulo: string;

  @IsString()
  descripcion: string;

  @IsString()
  nivel: string;

  @IsNumber()
  duracion_horas: number;

  @IsNumber()
  costo: number;

  @IsString()
  modalidad: string;

  @IsString()
  fecha_inicio: string;

  @IsString()
  estado: string;
  
}
