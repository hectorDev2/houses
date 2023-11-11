import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutHouseComponent } from './layout/layout-house/layout-house.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SearchInputComponent } from './components/search-input/search-input.component';
import { UserMenuComponent } from './components/user-menu/user-menu.component';
import { MenuItemComponent } from './components/navbar/menu-item/menu-item.component';
import { RouterModule } from '@angular/router';
import { NavbarHousesComponent } from './components/navbar/navbar-houses/navbar-houses.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

@NgModule({
  declarations: [
    LayoutHouseComponent,
    NavbarComponent,
    SearchInputComponent,
    UserMenuComponent,
    MenuItemComponent,
    NavbarHousesComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    NgxSkeletonLoaderModule,
  ],
  exports: [
    LayoutHouseComponent,
    NavbarComponent,
    SearchInputComponent,
    UserMenuComponent,
  ],
})
export class SharedModule {}
