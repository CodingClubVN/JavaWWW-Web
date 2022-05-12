import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SedanComponent } from './sedan.component';

describe('SedanComponent', () => {
  let component: SedanComponent;
  let fixture: ComponentFixture<SedanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SedanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SedanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
