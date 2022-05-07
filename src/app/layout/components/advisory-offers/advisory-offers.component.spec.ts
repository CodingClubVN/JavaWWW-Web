import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvisoryOffersComponent } from './advisory-offers.component';

describe('AdvisoryOffersComponent', () => {
  let component: AdvisoryOffersComponent;
  let fixture: ComponentFixture<AdvisoryOffersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvisoryOffersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvisoryOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
