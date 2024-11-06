import { TestBed } from '@angular/core/testing';

import { AliApiService } from './ali-api.service';

describe('AliApiService', () => {
  let service: AliApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AliApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
