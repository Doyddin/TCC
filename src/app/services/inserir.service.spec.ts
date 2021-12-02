import { TestBed } from '@angular/core/testing';

import { InserirService } from './inserir.service';

describe('InserirService', () => {
  let service: InserirService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InserirService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
