import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCartModalComponent } from './user-cart-modal.component';

describe('UserCartModalComponent', () => {
  let component: UserCartModalComponent;
  let fixture: ComponentFixture<UserCartModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserCartModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCartModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
