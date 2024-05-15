import { Routes } from '@angular/router';
import { Swiper2Component } from './startseite/swiper2/swiper2.component';
import { SwiperComponent } from './startseite/swiper/swiper.component';

export const routes: Routes = [{path: 'swiper2', component: Swiper2Component},
    {path: 'swiper', component: SwiperComponent}
];
