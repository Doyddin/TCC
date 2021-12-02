import { TestBed } from '@angular/core/testing';

import { listarService } from './listar.service';

describe('ListarService', () => {
  let service: listarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(listarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
