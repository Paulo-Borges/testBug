import { TestBed } from '@angular/core/testing';

import { CalculadoraService } from './calculadora-service';

//_______________________________X__________________Vai decrever o teste
describe('CalculadoraService', () => {
  let service: CalculadoraService;

  //____E executado(12, 13) antes de cada teste(18),
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CalculadoraService],
    });
    service = TestBed.inject(CalculadoraService);
  });

  //_______________________________X__________________É um teste(18) que verifica se foi criado corretamente
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
