import { TestBed } from '@angular/core/testing';

import { HonorService } from './honor.service';

describe('HonorService', () => {
  let service: HonorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HonorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
