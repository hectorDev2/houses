import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
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
import { LazyImageComponent } from './components/lazy-image/lazy-image.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PropertyRenderPageComponent } from './pages/property-render-page/property-render-page.component';
import { SliderImgComponent } from './components/slider-img/slider-img.component';
import { SwiperDirective } from '../directives/swiper.directive';

@NgModule({
  declarations: [
    LayoutHouseComponent,
    NavbarComponent,
    SearchInputComponent,
    UserMenuComponent,
    MenuItemComponent,
    NavbarHousesComponent,
    LazyImageComponent,
    PropertyRenderPageComponent,
    SliderImgComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    NgxSkeletonLoaderModule,
    ReactiveFormsModule,
    SwiperDirective,
  ],
  exports: [
    LayoutHouseComponent,
    NavbarComponent,
    SearchInputComponent,
    UserMenuComponent,
    LazyImageComponent,
    SliderImgComponent,
    PropertyRenderPageComponent,
  ],

  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule {}
