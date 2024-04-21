import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero/hero.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [
    RouterOutlet,
    HeaderComponent,
    HeroComponent,
    FooterComponent,
    ContactComponent,
    AboutComponent,
  ],
})
export class AppComponent {
  title = 'angular-folio2';
}

import AOS from 'aos';
import 'aos/dist/aos.css';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component'; // You can also use <link> for styles
// ..
AOS.init();
