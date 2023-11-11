import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeMapsComponent } from './pages/home-maps/home-maps.component';
import { LayoutHouseComponent } from '../shared/layout/layout-house/layout-house.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutHouseComponent,
    children: [
      {
        path: '',
        component: HomeMapsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MapsRoutingModule {}
