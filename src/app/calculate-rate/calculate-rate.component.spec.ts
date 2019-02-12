import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculateRateComponent } from './calculate-rate.component';

describe('AddUserComponent', () => {
  let component: CalculateRateComponent;
  let fixture: ComponentFixture<CalculateRateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculateRateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculateRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
