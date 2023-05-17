import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxFlexmonsterComponent } from './ngx-flexmonster.component';

describe('NgxFlexmonsterComponent', () => {
  let component: NgxFlexmonsterComponent;
  let fixture: ComponentFixture<NgxFlexmonsterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgxFlexmonsterComponent]
    });
    fixture = TestBed.createComponent(NgxFlexmonsterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
