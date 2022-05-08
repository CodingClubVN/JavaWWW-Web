import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OderDetailComponent } from './oder-detail.component';

describe('OderDetailComponent', () => {
  let component: OderDetailComponent;
  let fixture: ComponentFixture<OderDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OderDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OderDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
