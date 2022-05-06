import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBrandsComponent } from './admin-brands.component';

describe('AdminBrandsComponent', () => {
  let component: AdminBrandsComponent;
  let fixture: ComponentFixture<AdminBrandsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminBrandsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminBrandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
