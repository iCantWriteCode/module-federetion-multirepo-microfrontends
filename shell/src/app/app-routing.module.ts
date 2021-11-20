import { loadRemoteModule } from '@angular-architects/module-federation';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

const HOME_URL    = 'http://localhost:4801/remoteEntry.js';
const REPORTS_URL = 'http://localhost:4802/remoteEntry.js';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => loadRemoteModule({
            remoteEntry: HOME_URL,
            remoteName: 'homepage',
            exposedModule: './Module'
          })
          .then(m => m.HomepageModule)
      },
      {
        path: 'reports',
        loadChildren: () => loadRemoteModule({
            remoteEntry: REPORTS_URL,
            remoteName: 'reports',
            exposedModule: './Module'
          })
          .then(m => m.ReportsModule)
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
