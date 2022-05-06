import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandItemComponent } from './brand-item.component';

describe('BrandItemComponent', () => {
  let component: BrandItemComponent;
  let fixture: ComponentFixture<BrandItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrandItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
