import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AuthLibComponent } from './components/auth-lib.component';


@NgModule({
  declarations: [
    AuthLibComponent
  ],
  imports: [
    ReactiveFormsModule
  ],
  exports: [
    AuthLibComponent
  ]
})
export class AuthLibModule { }
