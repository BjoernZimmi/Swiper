import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { SwiperOptions } from 'swiper/types';



@Component({
  selector: 'app-swiper',
  standalone: true,
  imports: [],
  templateUrl: './swiper.component.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class SwiperComponent {
  config: SwiperOptions = {
    slidesPerView: 3,
    spaceBetween: 50,
    navigation: true,
    pagination: { clickable: true },
    scrollbar: { draggable: true },
  };
}
