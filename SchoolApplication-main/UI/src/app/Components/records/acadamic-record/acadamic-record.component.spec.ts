import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcadamicRecordComponent } from './acadamic-record.component';

describe('AcadamicRecordComponent', () => {
  let component: AcadamicRecordComponent;
  let fixture: ComponentFixture<AcadamicRecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcadamicRecordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcadamicRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
