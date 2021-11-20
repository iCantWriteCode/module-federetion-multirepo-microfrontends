import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportsRoutingModule } from './reports-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { ReportPageAComponent } from './pages/report-page-a/report-page-a.component';
import { ReportPageBComponent } from './pages/report-page-b/report-page-b.component';


@NgModule({
  declarations: [
    HomeComponent,
    ReportPageAComponent,
    ReportPageBComponent
  ],
  imports: [
    CommonModule,
    ReportsRoutingModule
  ]
})
export class ReportsModule { }
