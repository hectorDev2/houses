import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LayoutHouseComponent } from './shared/layout/layout-house/layout-house.component';
import { ApartmentPageComponent } from './pages/apartment-page/apartment-page.component';
import { LandsPageComponent } from './pages/lands-page/lands-page.component';
import { DetailsPropertyPageComponent } from './pages/details-property-page/details-property-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutHouseComponent,
    children: [
      { path: '', component: HomePageComponent },
      { path: 'departments', component: ApartmentPageComponent },
      { path: 'lands', component: LandsPageComponent },
      { path: 'search/:name', component: SearchPageComponent },
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
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
