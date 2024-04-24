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
  const copiedMessage: HTMLElement | null =
    document.querySelector('.copied-message');

  if (emailButton && toCopyDiv && copiedMessage) {
    emailButton.addEventListener('click', () => {
      const email: string = emailButton.textContent || '';
      navigator.clipboard.writeText(email).then(
        () => {
          console.log('Email copied to clipboard');
          toCopyDiv.style.display = 'none';
          copiedMessage.style.display = 'block';
          setTimeout(() => {
            copiedMessage.style.display = 'none';
          }, 2000); // Hide after 5 seconds
        },
        (err) => {
          console.error('Error copying email to clipboard: ', err);
        }
      );
    });
  }
});
