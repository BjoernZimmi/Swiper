import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StartseiteComponent } from './startseite/startseite.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, StartseiteComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'swiper';
}
