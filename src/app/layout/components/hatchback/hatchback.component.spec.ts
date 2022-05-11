import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HatchbackComponent } from './hatchback.component';

describe('HatchbackComponent', () => {
  let component: HatchbackComponent;
  let fixture: ComponentFixture<HatchbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HatchbackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HatchbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
