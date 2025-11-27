import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GestionCursosController } from './gestion-cursos.controller';
import { GestionCursosService } from './gestion-cursos.service';
import { GestionCursos } from './gestion-cursos.entity';

@Module({
  imports: [TypeOrmModule.forFeature([GestionCursos])],
  controllers: [GestionCursosController],
  providers: [GestionCursosService]
})
export class GestionCursosModule {}

