import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgIfComponentSampleComponent } from './ng-if-component-sample.component';

describe('NgIfComponentSampleComponent', () => {
  let component: NgIfComponentSampleComponent;
  let fixture: ComponentFixture<NgIfComponentSampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgIfComponentSampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgIfComponentSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
