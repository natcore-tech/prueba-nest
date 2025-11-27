import { Test, TestingModule } from '@nestjs/testing';
import { GestionCursosController } from './gestion-cursos.controller';

describe('GestionCursosController', () => {
  let controller: GestionCursosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GestionCursosController],
    }).compile();

    controller = module.get<GestionCursosController>(GestionCursosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
