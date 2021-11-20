import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { ReportPageAComponent } from './pages/report-page-a/report-page-a.component';
import { ReportPageBComponent } from './pages/report-page-b/report-page-b.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'page-a',
    component: ReportPageAComponent
  },
  {
    path: 'page-b',
    component: ReportPageBComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportsRoutingModule { }
