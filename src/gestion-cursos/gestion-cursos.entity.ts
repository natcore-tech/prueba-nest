import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('gestion-cursos')
export class GestionCursos {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  
  @Column()
  codigo: number;

  @Column()
  titulo: string;
  
  @Column()
  subtitulo: string;

  @Column()
  descripcion: string;

  @Column()
  nivel: string;

  @Column()
  duracion_horas: number;

  @Column()
  costo: number;

  @Column()
  modalidad: string;

  @Column()
  fecha_inicio: string;

  @Column()
  estado: string;
  
}