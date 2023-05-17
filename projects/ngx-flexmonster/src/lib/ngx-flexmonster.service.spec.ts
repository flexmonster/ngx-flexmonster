import { TestBed } from '@angular/core/testing';

import { NgxFlexmonsterService } from './ngx-flexmonster.service';

describe('NgxFlexmonsterService', () => {
  let service: NgxFlexmonsterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxFlexmonsterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
