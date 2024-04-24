import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {}

document.addEventListener('DOMContentLoaded', () => {
  const emailButton: HTMLElement | null = document.querySelector('.email');
  const toCopyDiv: HTMLElement | null = document.querySelector('.to-copy');

  if (emailButton && toCopyDiv) {
    emailButton.addEventListener('click', () => {
      const email: string = emailButton.textContent || '';
      navigator.clipboard.writeText(email).then(
        () => {
          console.log('Email copied to clipboard');
        },
        (err) => {
          console.error('Error copying email to clipboard: ', err);
        }
      );
    });
  }
});
