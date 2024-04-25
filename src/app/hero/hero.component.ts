import { Component } from '@angular/core';
import { AboutComponent } from '../about/about.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
  imports: [AboutComponent],
})
export class HeroComponent {}

window.addEventListener('scroll', () => {
  const scrollPosition: number = window.scrollY;
  const heroTitleLeft: HTMLElement | null = document.querySelector(
    '.hero__title__left'
  ) as HTMLElement;

  if (heroTitleLeft) {
    if (window.innerWidth > 765) {
      const moveDistance: number = 0.7; // Adjust this value to change the distance
      heroTitleLeft.style.marginLeft = `-${scrollPosition * moveDistance}px`;
    } else {
      heroTitleLeft.style.marginLeft = '0';
    }
  }
});

window.addEventListener('scroll', () => {
  const scrollPosition: number = window.scrollY;
  const heroTitleRight: HTMLElement | null = document.querySelector(
    '.hero__title__right'
  ) as HTMLElement;

  if (heroTitleRight) {
    if (window.innerWidth > 765) {
      const moveDistance: number = 0.7; // Adjust this value to change the distance
      heroTitleRight.style.marginRight = `-${scrollPosition * moveDistance}px`;
    } else {
      heroTitleRight.style.marginRight = '0';
    }
  }
});

window.addEventListener('scroll', () => {
  const scrollPosition: number = window.scrollY;
  const heroTitle: HTMLElement | null = document.querySelector('.hero__title');

  if (heroTitle) {
    // Calculate the amount by which to move the title upwards
    const moveDistance: number = 1.5; // Adjust this value to change the distance
    const marginTop: number = scrollPosition * moveDistance;
    heroTitle.style.marginTop = `-${marginTop}px`;
  }
});
