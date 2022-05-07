import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvisoryDealersComponent } from './advisory-dealers.component';

describe('AdvisoryDealersComponent', () => {
  let component: AdvisoryDealersComponent;
  let fixture: ComponentFixture<AdvisoryDealersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvisoryDealersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvisoryDealersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
