import { TestBed } from '@angular/core/testing';

import { FlexmonsterPivotService } from './ngx-flexmonster.service';

describe('NgxFlexmonsterService', () => {
  let service: FlexmonsterPivotService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlexmonsterPivotService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
