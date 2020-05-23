import { TestBed } from '@angular/core/testing';

import { ErrorApiService } from './error-api.service';

describe('ErrorApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ErrorApiService = TestBed.get(ErrorApiService);
    expect(service).toBeTruthy();
  });
});
