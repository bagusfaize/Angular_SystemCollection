import { TestBed } from '@angular/core/testing';

import { CotoService } from './coto.service';

describe('CotoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CotoService = TestBed.get(CotoService);
    expect(service).toBeTruthy();
  });
});
