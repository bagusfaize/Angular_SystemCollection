import { TestBed } from '@angular/core/testing';

import { ExapleService } from './exaple.service';

describe('ExapleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExapleService = TestBed.get(ExapleService);
    expect(service).toBeTruthy();
  });
});
