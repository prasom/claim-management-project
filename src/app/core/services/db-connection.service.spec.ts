import { TestBed, inject } from '@angular/core/testing';

import { DbConnectionService } from './db-connection.service';

describe('DbConnectionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DbConnectionService]
    });
  });

  it('should be created', inject([DbConnectionService], (service: DbConnectionService) => {
    expect(service).toBeTruthy();
  }));
});
