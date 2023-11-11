import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LayoutHouseComponent } from './shared/layout/layout-house/layout-house.component';
import { ApartmentPageComponent } from './pages/apartment-page/apartment-page.component';
import { BuildingsPageComponent } from './pages/buildings-page/buildings-page.component';
import { LandsPageComponent } from './pages/lands-page/lands-page.component';
import { DetailsPropertyPageComponent } from './pages/details-property-page/details-property-page.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutHouseComponent,
    children: [
      { path: '', component: HomePageComponent },
      { path: 'apartments', component: ApartmentPageComponent },
      { path: 'buildings', component: BuildingsPageComponent },
      { path: 'lands', component: LandsPageComponent },
      { path: 'homes', component: HomePageComponent },
      {
        path: 'property/:id',
        component: DetailsPropertyPageComponent,
      },
    ],
  },
  {
    path: 'maps',
    loadChildren: () => import('./maps/maps.module').then((m) => m.MapsModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
