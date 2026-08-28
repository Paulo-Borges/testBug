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

  //_______________________________X__________________É um teste(18) que verifica se a soma esta certa
  it('Deve somar, corretamente, dois números', () => {
    expect(service).toBeTruthy();
    const result = service.calcular(5, 8, 'soma');
    expect(result).toBe(13);
  });

  //_______________________________X__________________É um teste(18) que verifica se a subtração esta certa
  it('Deve subtrair, corretamente, dois números', () => {
    expect(service).toBeTruthy();
    const result = service.calcular(8, 8, 'subtração');
    expect(result).toBe(0);
  });

  //_______________________________X__________________É um teste(18) que verifica se a multiplicação esta certa
  it('Deve multiplicar, corretamente, dois números', () => {
    expect(service).toBeTruthy();
    const result = service.calcular(5, 8, 'multiplicação');
    expect(result).toBe(40);
  });

  //_______________________________X__________________É um teste(18) que verifica se a divisão esta certa
  it('Deve dividir, corretamente, dois números', () => {
    expect(service).toBeTruthy();
    const result = service.calcular(8, 2, 'divisão');
    expect(result).toBe(4);
  });
});
