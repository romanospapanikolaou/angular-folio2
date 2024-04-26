import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {}

(window as any).toggleMenu = () => {
  const navLinks: HTMLElement | null = document.querySelector('.nav-links');
  const burger: HTMLElement | null = document.querySelector('.burger');
  const dropdown: HTMLElement | null =
    document.querySelector('.dropdown-content');

  if (!navLinks || !burger || !dropdown) {
    console.error('One or more elements not found.');
    return;
  }

  navLinks.classList.toggle('active');
  burger.classList.toggle('active');
  dropdown.classList.toggle('active');

  // Close dropdown if screen is larger than 900px and burger is clicked
  if (window.innerWidth > 900 && !burger.classList.contains('active')) {
    dropdown.classList.remove('active');
    burger.classList.remove('active');
  }
};

window.onresize = function (): void {
  const screenWidth: number = window.innerWidth;
  const burger: HTMLElement | null = document.querySelector('.burger');
  const dropdown: HTMLElement | null =
    document.querySelector('.dropdown-content');

  if (!burger || !dropdown) {
    console.error('One or more elements not found.');
    return;
  }

  // Close dropdown and reset burger state if screen is larger than 900px
  if (screenWidth > 900) {
    dropdown.classList.remove('active');
    burger.classList.remove('active');
  }
};
