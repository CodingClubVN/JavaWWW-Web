import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialOfferComponent } from './special-offer.component';

describe('SpecialOfferComponent', () => {
  let component: SpecialOfferComponent;
  let fixture: ComponentFixture<SpecialOfferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecialOfferComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
