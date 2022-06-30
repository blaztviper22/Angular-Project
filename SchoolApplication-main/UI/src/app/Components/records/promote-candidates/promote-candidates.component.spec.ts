import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromoteCandidatesComponent } from './promote-candidates.component';

describe('PromoteCandidatesComponent', () => {
  let component: PromoteCandidatesComponent;
  let fixture: ComponentFixture<PromoteCandidatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromoteCandidatesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PromoteCandidatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
