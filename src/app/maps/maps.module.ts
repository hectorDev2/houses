import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapsRoutingModule } from './maps-routing.module';
import { HomeMapsComponent } from './pages/home-maps/home-maps.component';


@NgModule({
  declarations: [
    HomeMapsComponent
  ],
  imports: [
    CommonModule,
    MapsRoutingModule
  ]
})
export class MapsModule { }
