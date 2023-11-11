import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SharedModule } from './shared/shared.module';
import { ApartmentPageComponent } from './pages/apartment-page/apartment-page.component';
import { BuildingsPageComponent } from './pages/buildings-page/buildings-page.component';
import { LandsPageComponent } from './pages/lands-page/lands-page.component';
import { HomesPagesComponent } from './pages/homes-pages/homes-pages.component';
import { SliderImgComponent } from './components/slider-img/slider-img.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

import { register } from 'swiper/element/bundle';
import { SwiperDirective } from './directives/swiper.directive';
import { DetailsPropertyPageComponent } from './pages/details-property-page/details-property-page.component';

register();

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ApartmentPageComponent,
    BuildingsPageComponent,
    LandsPageComponent,
    HomesPagesComponent,
    SliderImgComponent,
    DetailsPropertyPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    NgxSkeletonLoaderModule,
    SwiperDirective,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
