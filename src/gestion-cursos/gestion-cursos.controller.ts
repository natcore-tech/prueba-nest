import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { GestionCursosService } from './gestion-cursos.service';
import { CreateGestionCursosDto } from './dto/create-gestion-cursos.dto';
import { UpdateGestionCursosDto } from './dto/update-gestion-cursos.dto';

@Controller('gestion-cursos')
export class GestionCursosController {
    constructor(private readonly GestionCursosService: GestionCursosService) {}

    @Post()
    create(@Body() createGestionCursosDto: CreateGestionCursosDto) {
        return this.GestionCursosService.create(createGestionCursosDto);
    }

    @Get()
    findAll() {
        return this.GestionCursosService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.GestionCursosService.findOne(id);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updateGestionCursosDto: UpdateGestionCursosDto) {
        return this.GestionCursosService.update(id, updateGestionCursosDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.GestionCursosService.remove(id);
    }
    
}
