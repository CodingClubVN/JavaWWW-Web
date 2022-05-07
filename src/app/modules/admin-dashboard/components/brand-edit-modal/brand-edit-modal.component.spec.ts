import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandEditModalComponent } from './brand-edit-modal.component';

describe('BrandEditModalComponent', () => {
  let component: BrandEditModalComponent;
  let fixture: ComponentFixture<BrandEditModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrandEditModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandEditModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
