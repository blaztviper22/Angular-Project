import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudenDashboardComponent } from './studen-dashboard.component';

describe('StudenDashboardComponent', () => {
  let component: StudenDashboardComponent;
  let fixture: ComponentFixture<StudenDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudenDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudenDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
