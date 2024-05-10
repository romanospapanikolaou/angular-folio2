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
    ProjectsComponent,
  ],
})
export class AppComponent {
  title = 'angular-folio2';
}

import AOS from 'aos';
import 'aos/dist/aos.css';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component'; // You can also use <link> for styles
// ..
AOS.init();

window.addEventListener('DOMContentLoaded', () => {
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    const pushToTopBtn = document.getElementById('pushToTopBtn');
    if (pushToTopBtn) {
      if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 750
      ) {
        pushToTopBtn.classList.add('show');
      } else {
        pushToTopBtn.classList.remove('show');
      }
    }
  }

  function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  const pushToTopBtn = document.getElementById('pushToTopBtn');
  if (pushToTopBtn) {
    pushToTopBtn.addEventListener('click', scrollToTop);
  }
});
