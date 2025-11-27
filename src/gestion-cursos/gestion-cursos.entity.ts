import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('gestion-cursos')
export class GestionCursos {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;
}