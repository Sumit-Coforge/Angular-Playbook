import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/home/home.component').then((m) => m.HomeComponent),
    title: 'Angular Feature Playground',
  },
  {
    path: 'signals',
    loadComponent: () =>
      import('./features/signals-demo/signals-demo.component').then((m) => m.SignalsDemoComponent),
    title: 'Signals',
  },
  {
    path: 'observables',
    loadComponent: () =>
      import('./features/observables-demo/observables-demo.component').then((m) => m.ObservablesDemoComponent),
    title: 'Observables',
  },
  {
    path: 'pipes',
    loadComponent: () =>
      import('./features/pipes-demo/pipes-demo.component').then((m) => m.PipesDemoComponent),
    title: 'Pipes',
  },
  {
    path: 'forms',
    loadComponent: () =>
      import('./features/forms-demo/forms-demo.component').then((m) => m.FormsDemoComponent),
    title: 'Forms',
  },
  {
    path: 'directives',
    loadComponent: () =>
      import('./features/directives-demo/directives-demo.component').then((m) => m.DirectivesDemoComponent),
    title: 'Directives',
  },
  { path: '**', redirectTo: '' },
];
