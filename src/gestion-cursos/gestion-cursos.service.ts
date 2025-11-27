import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GestionCursos } from './gestion-cursos.entity';
import { CreateGestionCursosDto } from './dto/create-gestion-cursos.dto';
import { UpdateGestionCursosDto } from './dto/update-gestion-cursos.dto';



@Injectable()
export class GestionCursosService {
    constructor(
    @InjectRepository(GestionCursos)
    private readonly categoryRepository: Repository<GestionCursos>,
  ) {}

  create(createGestionCursosDto: CreateGestionCursosDto) {
    const category = this.categoryRepository.create(createGestionCursosDto);
    return this.categoryRepository.save(category);
  }

  findAll() {
    return this.categoryRepository.find();
  }

  findOne(id: string) {
    return this.categoryRepository.findOne({ where: { id } });
  }

  async update(id: string, updateGestionCursosDto: UpdateGestionCursosDto) {
    const category = await this.categoryRepository.findOne({ where: { id } });
    if (!category) return null;
    Object.assign(category, updateGestionCursosDto);
    return this.categoryRepository.save(category);
  }

  async remove(id: string) {
    const category = await this.categoryRepository.findOne({ where: { id } });
    if (!category) return null;
    return this.categoryRepository.remove(category);
  }
}
