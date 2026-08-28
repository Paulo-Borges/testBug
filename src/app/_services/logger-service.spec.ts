import { TestBed } from '@angular/core/testing';

import { LoggerService } from './logger-service';

//_______________________________X__________________Vai decrever o teste
describe('LoggerService', () => {
  let service: LoggerService;
  //____E executado(10, 11) antes de cada teste(16),
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoggerService);
  });
  //_________________X_______________É um teste(18) que verifica se o serviço foi criado corretamente
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
