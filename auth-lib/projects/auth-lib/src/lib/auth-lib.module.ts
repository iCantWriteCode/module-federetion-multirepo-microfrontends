import { NgModule } from '@angular/core';
import { AuthLibComponent } from './auth-lib.component';
import { ReactiveFormsModule } from '@angular/forms';



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
