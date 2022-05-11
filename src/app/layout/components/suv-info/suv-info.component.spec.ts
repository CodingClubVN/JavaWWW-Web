import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuvInfoComponent } from './suv-info.component';

describe('SuvInfoComponent', () => {
  let component: SuvInfoComponent;
  let fixture: ComponentFixture<SuvInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuvInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuvInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
