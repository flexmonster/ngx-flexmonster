import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexmonsterPivot } from './ngx-flexmonster.component';

describe('NgxFlexmonsterComponent', () => {
  let component: FlexmonsterPivot;
  let fixture: ComponentFixture<FlexmonsterPivot>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FlexmonsterPivot]
    });
    fixture = TestBed.createComponent(FlexmonsterPivot);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
