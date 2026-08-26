import { NgClass, NgStyle } from '@angular/common';
import { Component, signal } from '@angular/core';
import { HighlightDirective } from '../../directives/highlight.directive';

type Status = 'active' | 'inactive' | 'pending';

interface Member {
  name: string;
  status: Status;
}

@Component({
  selector: 'app-directives-demo',
  standalone: true,
  imports: [NgClass, NgStyle, HighlightDirective],
  templateUrl: './directives-demo.component.html',
  styleUrl: './directives-demo.component.scss',
})
export class DirectivesDemoComponent {
  readonly members: Member[] = [
    { name: 'Ava Thompson', status: 'active' },
    { name: 'Liam Chen', status: 'pending' },
    { name: 'Noor Haddad', status: 'inactive' },
    { name: 'Priya Nair', status: 'active' },
  ];

  readonly darkCard = signal(false);
  readonly fontScale = signal(1);

  toggleTheme(): void {
    this.darkCard.update((v) => !v);
  }

  increaseFont(): void {
    this.fontScale.update((v) => Math.min(1.6, +(v + 0.1).toFixed(1)));
  }

  decreaseFont(): void {
    this.fontScale.update((v) => Math.max(0.8, +(v - 0.1).toFixed(1)));
  }
}
