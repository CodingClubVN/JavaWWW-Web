import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarItemEditComponent } from './car-item-edit.component';

describe('CarItemEditComponent', () => {
  let component: CarItemEditComponent;
  let fixture: ComponentFixture<CarItemEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarItemEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarItemEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
