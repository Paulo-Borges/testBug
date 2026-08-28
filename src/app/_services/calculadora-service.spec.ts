import { TestBed } from '@angular/core/testing';
import { vi } from 'vitest';
import { CalculadoraService } from './calculadora-service';
import { LoggerService } from './logger-service';

//_______________________________X__________________Vai decrever o teste
describe('CalculadoraService', () => {
  let service: CalculadoraService;
  let loggerSpy: { log: ReturnType<typeof vi.fn> };

  //____E executado(12, 13) antes de cada teste(18),
  beforeEach(() => {
    loggerSpy = {
      log: vi.fn(),
    };
    TestBed.configureTestingModule({
      providers: [CalculadoraService, { provide: LoggerService, useValue: loggerSpy }],
    });
    service = TestBed.inject(CalculadoraService);
  });

  //_______________________________X__________________É um teste(18) que verifica se foi criado corretamente
  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  //_______________________X__________________É um teste(18) que verifica se a soma esta certa
  it('Deve somar, corretamente, dois números', () => {
    expect(service).toBeTruthy();
    const result = service.calcular(5, 8, 'soma');
    expect(result).toBe(13);
  });

  //____________________X__________________É um teste(18) que verifica se a subtração esta certa
  it('Deve subtrair, corretamente, dois números', () => {
    expect(service).toBeTruthy();
    const result = service.calcular(8, 8, 'subtração');
    expect(result).toBe(0);
  });

  //_________________X__________________É um teste(18) que verifica se a multiplicação esta certa
  it('Deve multiplicar, corretamente, dois números', () => {
    expect(service).toBeTruthy();
    const result = service.calcular(5, 8, 'multiplicação');
    expect(result).toBe(40);
  });

  //__________________________X__________________É um teste(18) que verifica se a divisão esta certa
  it('Deve dividir, corretamente, dois números', () => {
    expect(service).toBeTruthy();
    const result = service.calcular(8, 2, 'divisão');
    expect(result).toBe(4);
  });

  //__________________________X__________________É um teste(18) que verifica se a operação inexistente é tratada corretamente
  it('Operação não existe', () => {
    expect(service).toBeTruthy();
    const result = service.calcular(8, 2, 'jhjhuuhu');
    expect(result).toBeNull();
    expect(loggerSpy.log).toHaveBeenCalledTimes(1);
  });
});
