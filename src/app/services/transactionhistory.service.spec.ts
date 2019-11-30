import { TestBed } from '@angular/core/testing';

import { TransactionhistoryService } from './transactionhistory.service';

describe('TransactionhistoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TransactionhistoryService = TestBed.get(TransactionhistoryService);
    expect(service).toBeTruthy();
  });
});
