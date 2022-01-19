import { TestBed } from '@angular/core/testing';

import { OverallRankService } from './overall-rank.service';

describe('OverallRankService', () => {
  let service: OverallRankService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OverallRankService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
