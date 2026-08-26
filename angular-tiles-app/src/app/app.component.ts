import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Angular Feature Playground';

  readonly navLinks = [
    { path: '/', label: 'Home' },
    { path: '/signals', label: 'Signals' },
    { path: '/observables', label: 'Observables' },
    { path: '/pipes', label: 'Pipes' },
    { path: '/forms', label: 'Forms' },
    { path: '/directives', label: 'Directives' },
  ];
}
