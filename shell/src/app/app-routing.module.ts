import { loadRemoteModule, loadRemoteEntry } from '@angular-architects/module-federation';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

import { AuthLibModule, AuthLibComponent } from 'auth-lib'

const HOME_URL    = 'http://localhost:4801/remoteEntry.js';
const REPORTS_URL = 'http://localhost:4802/remoteEntry.js';
// const LOGIN_URL   = 'http://localhost:4803/remoteEntry.js';
const AUTH_LIB    = 'http://localhost:4804/remoteEntry.js';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
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
  {
    path: 'login',
    component: AuthLibComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
