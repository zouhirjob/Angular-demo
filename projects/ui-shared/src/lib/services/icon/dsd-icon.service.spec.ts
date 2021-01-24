import { TestBed } from '@angular/core/testing';

import { DsdIconService } from './dsd-icon.service';

describe('DsdIconService', () => {
  let service: DsdIconService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DsdIconService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
