import { TestBed } from '@angular/core/testing';

import { MenuLeftService } from './menu-left.service';

describe('MenuLeftService', () => {
  let service: MenuLeftService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MenuLeftService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
