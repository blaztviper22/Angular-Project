import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudenLoginComponent } from './studen-login.component';

describe('StudenLoginComponent', () => {
  let component: StudenLoginComponent;
  let fixture: ComponentFixture<StudenLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudenLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudenLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
