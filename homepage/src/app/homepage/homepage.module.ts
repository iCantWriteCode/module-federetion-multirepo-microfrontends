import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomepageRoutingModule } from './homepage-routing.module';
import { HomeComponent } from './pages/home/home.component';

// import { UiLibModule } from 'ui-lib'
import { ButtonComponent, CardComponent } from 'ui-lib'

@NgModule({
  declarations: [
    HomeComponent,
    ButtonComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    HomepageRoutingModule
  ]
})

export class HomepageModule { }
