import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportPageBComponent } from './report-page-b.component';

describe('ReportPageBComponent', () => {
  let component: ReportPageBComponent;
  let fixture: ComponentFixture<ReportPageBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportPageBComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportPageBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
