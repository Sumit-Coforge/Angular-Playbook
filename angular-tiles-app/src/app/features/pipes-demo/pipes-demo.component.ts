import { CurrencyPipe, DatePipe, JsonPipe, PercentPipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import { TaskStoreService } from '../../core/services/task-store.service';
import { Priority } from '../../core/models/task.model';
import { TruncatePipe } from '../../pipes/truncate.pipe';
import { TimeAgoPipe } from '../../pipes/time-ago.pipe';
import { FilterByPipe } from '../../pipes/filter-by.pipe';

interface Product {
  name: string;
  price: number;
  discount: number;
  description: string;
}

@Component({
  selector: 'app-pipes-demo',
  standalone: true,
  imports: [DatePipe, CurrencyPipe, PercentPipe, JsonPipe, TruncatePipe, TimeAgoPipe, FilterByPipe],
  templateUrl: './pipes-demo.component.html',
  styleUrl: './pipes-demo.component.scss',
})
export class PipesDemoComponent {
  readonly today = new Date();

  readonly products: Product[] = [
    {
      name: 'Mechanical Keyboard',
      price: 89.99,
      discount: 0.15,
      description: 'A tactile, clicky mechanical keyboard built for long coding sessions and late night debugging.',
    },
    { name: 'Ultra-wide Monitor', price: 549, discount: 0.1, description: 'Enormous 34" curved display for maximum multitasking real estate.' },
    { name: 'Noise-cancelling Headphones', price: 199.5, discount: 0, description: 'Block out the world and focus on shipping features.' },
  ];

  readonly priorityFilter = signal<Priority | 'all'>('all');

  constructor(readonly store: TaskStoreService) {}

  setFilter(value: string): void {
    this.priorityFilter.set(value as Priority | 'all');
  }
}
