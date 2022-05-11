import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoupeComponent } from './coupe.component';

describe('CoupeComponent', () => {
  let component: CoupeComponent;
  let fixture: ComponentFixture<CoupeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoupeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoupeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
