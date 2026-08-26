import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FeatureTile } from '../../core/models/feature-tile.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  readonly tiles: FeatureTile[] = [
    {
      title: 'Signals',
      description: 'Reactive primitives: signal, computed and effect powering a live task tracker.',
      route: '/signals',
      icon: '⚡',
      accent: '#6366f1',
      tags: ['signal', 'computed', 'effect'],
    },
    {
      title: 'Observables',
      description: 'Classic RxJS: BehaviorSubject, interval, switchMap and the async pipe.',
      route: '/observables',
      icon: '🌊',
      accent: '#0ea5e9',
      tags: ['RxJS', 'async pipe', 'toSignal'],
    },
    {
      title: 'Pipes',
      description: 'Built-in pipes (date, currency, percent) plus custom truncate/timeAgo/filterBy pipes.',
      route: '/pipes',
      icon: '🔧',
      accent: '#f59e0b',
      tags: ['pure pipe', 'impure pipe'],
    },
    {
      title: 'Forms',
      description: 'Reactive forms with validators and a template-driven form side by side.',
      route: '/forms',
      icon: '📝',
      accent: '#10b981',
      tags: ['ReactiveForms', 'ngModel'],
    },
    {
      title: 'Directives',
      description: 'Structural control flow (@if/@for/@switch), NgClass/NgStyle and a custom directive.',
      route: '/directives',
      icon: '🎯',
      accent: '#ef4444',
      tags: ['@for', 'NgClass', 'custom directive'],
    },
  ];
}
