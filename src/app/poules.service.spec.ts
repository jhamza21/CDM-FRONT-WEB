import { TestBed } from '@angular/core/testing';

import { PoulesService } from './poules.service';

describe('PoulesService', () => {
  let service: PoulesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PoulesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
