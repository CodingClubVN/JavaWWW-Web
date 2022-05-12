import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvisoryBrochureComponent } from './advisory-brochure.component';

describe('AdvisoryBrochureComponent', () => {
  let component: AdvisoryBrochureComponent;
  let fixture: ComponentFixture<AdvisoryBrochureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvisoryBrochureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvisoryBrochureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
