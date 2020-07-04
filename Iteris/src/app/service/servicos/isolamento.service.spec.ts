import { TestBed } from '@angular/core/testing';

import { IsolamentoService } from './isolamento.service';

describe('IsolamentoService', () => {
  let service: IsolamentoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IsolamentoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
