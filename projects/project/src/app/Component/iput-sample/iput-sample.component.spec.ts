import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IputSampleComponent } from './iput-sample.component';

describe('IputSampleComponent', () => {
  let component: IputSampleComponent;
  let fixture: ComponentFixture<IputSampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IputSampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IputSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
