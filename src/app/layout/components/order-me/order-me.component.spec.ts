import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderMeComponent } from './order-me.component';

describe('OrderMeComponent', () => {
  let component: OrderMeComponent;
  let fixture: ComponentFixture<OrderMeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderMeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
