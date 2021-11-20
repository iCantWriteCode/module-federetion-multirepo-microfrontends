import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportPageAComponent } from './report-page-a.component';

describe('ReportPageAComponent', () => {
  let component: ReportPageAComponent;
  let fixture: ComponentFixture<ReportPageAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportPageAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportPageAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
