import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  @HostListener('click', ['$event'])
  onClick(event: Event) {
    if ((event.target as HTMLElement).tagName === 'A') {
      event.preventDefault();
      const targetId = (event.target as HTMLElement)
        .getAttribute('href')!
        .substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        this.smoothScroll(targetElement);
      }
    }
  }

  smoothScroll(targetElement: HTMLElement) {
    const duration = 1500; // duration in milliseconds
    const start = window.pageYOffset;
    const targetPosition = targetElement.getBoundingClientRect().top;
    const startTime =
      'now' in window.performance ? performance.now() : new Date().getTime();

    const scrollStep = () => {
      const now =
        'now' in window.performance ? performance.now() : new Date().getTime();
      const time = Math.min(1, (now - startTime) / duration);
      const timeFunction = time * (2 - time); // easeOutQuad easing function

      window.scrollTo(0, Math.ceil(timeFunction * targetPosition + start));

      if (time < 1) {
        requestAnimationFrame(scrollStep);
      }
    };

    requestAnimationFrame(scrollStep);
  }
}
