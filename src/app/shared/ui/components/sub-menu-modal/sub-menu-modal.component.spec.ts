import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubMenuModalComponent } from './sub-menu-modal.component';

describe('SubMenuModalComponent', () => {
  let component: SubMenuModalComponent;
  let fixture: ComponentFixture<SubMenuModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubMenuModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubMenuModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
