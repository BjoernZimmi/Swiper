import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { SwiperOptions } from 'swiper/types';
import { SwiperComponent } from './swiper/swiper.component';

@Component({
  selector: 'app-startseite',
  standalone: true,
  imports: [SwiperComponent],
  templateUrl: './startseite.component.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class StartseiteComponent {

  // constructor(private swiper: SwiperCore) {

  // }
  config: SwiperOptions = {
    slidesPerView: 3,
    spaceBetween: 50,
    navigation: true,
    pagination: { clickable: true },
    scrollbar: { draggable: true },
  };

  // onSwiper([swiper]) {
  //   console.log(swiper);
  // }
  // onSlideChange() {
  //   console.log('slide change');
  // }
}
