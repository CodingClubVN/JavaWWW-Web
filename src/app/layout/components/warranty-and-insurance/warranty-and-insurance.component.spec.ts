import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarrantyAndInsuranceComponent } from './warranty-and-insurance.component';

describe('WarrantyAndInsuranceComponent', () => {
  let component: WarrantyAndInsuranceComponent;
  let fixture: ComponentFixture<WarrantyAndInsuranceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WarrantyAndInsuranceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WarrantyAndInsuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
