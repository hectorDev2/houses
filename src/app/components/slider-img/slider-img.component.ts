import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  ViewChild,
} from '@angular/core';
import { Image } from 'src/app/interfaces/properties.interfaces';
import { Swiper, SwiperOptions } from 'swiper/types';
import { Mousewheel, Pagination, A11y } from 'swiper/modules';
@Component({
  selector: 'app-slider-img',
  templateUrl: './slider-img.component.html',
  styleUrls: ['./slider-img.component.css'],
})
export class SliderImgComponent implements AfterViewInit {
  @Input() carouselId: string | undefined;
  @Input()
  sliderImg!: Image[];

  swiper?: Swiper;
  @ViewChild('swiperRef')
  swiperRef: ElementRef | undefined;

  ngAfterViewInit() {
    this.swiper = this.swiperRef?.nativeElement.swiper;
  }

  public config: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 25,
    modules: [A11y, Mousewheel],
    breakpoints: {
      320: {
        slidesPerView: 1.5,
      },
      768: {
        slidesPerView: 2.5,
      },
      1280: {
        slidesPerView: 3.5,
      },
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    scrollbar: {
      el: '.swiper-scrollbar',
      enabled: true,
      draggable: true,
    },
  };
}
