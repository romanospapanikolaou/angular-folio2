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
  const heroTitle: HTMLElement | null = document.querySelector(
    '.hero__title__left'
  ) as HTMLElement;

  if (heroTitle) {
    const moveDistance: number = 1.5; // Adjust this value to change the distance
    heroTitle.style.marginLeft = `-${scrollPosition * moveDistance}px`;
  }
});

window.addEventListener('scroll', () => {
  const scrollPosition: number = window.scrollY;
  const heroTitle: HTMLElement | null = document.querySelector(
    '.hero__title__right'
  ) as HTMLElement;

  if (heroTitle) {
    const moveDistance: number = 1.5; // Adjust this value to change the distance
    heroTitle.style.marginRight = `-${scrollPosition * moveDistance}px`;
  }
});
