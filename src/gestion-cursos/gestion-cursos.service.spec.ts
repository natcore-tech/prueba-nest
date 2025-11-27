import { Test, TestingModule } from '@nestjs/testing';
import { GestionCursosService } from './gestion-cursos.service';

describe('GestionCursosService', () => {
  let service: GestionCursosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GestionCursosService],
    }).compile();

    service = module.get<GestionCursosService>(GestionCursosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
