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
