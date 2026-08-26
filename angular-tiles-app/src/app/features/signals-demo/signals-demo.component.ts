import { Component, computed, effect, signal } from '@angular/core';
import { TaskStoreService } from '../../core/services/task-store.service';
import { Priority } from '../../core/models/task.model';

@Component({
  selector: 'app-signals-demo',
  standalone: true,
  imports: [],
  templateUrl: './signals-demo.component.html',
  styleUrl: './signals-demo.component.scss',
})
export class SignalsDemoComponent {
  // --- Simple counter: signal + computed + effect ---
  readonly count = signal(0);
  readonly doubled = computed(() => this.count() * 2);
  readonly isEven = computed(() => this.count() % 2 === 0);

  private readonly countHistory = signal<number[]>([]);

  constructor(readonly store: TaskStoreService) {
    // effect() re-runs any time a signal it reads changes.
    effect(() => {
      this.countHistory.update((history) => [...history, this.count()].slice(-8));
    });
  }

  readonly history = computed(() => this.countHistory());

  newTaskTitle = signal('');
  newTaskPriority = signal<Priority>('medium');

  increment(): void {
    this.count.update((v) => v + 1);
  }

  decrement(): void {
    this.count.update((v) => Math.max(0, v - 1));
  }

  reset(): void {
    this.count.set(0);
  }

  addTask(): void {
    this.store.addTask(this.newTaskTitle(), this.newTaskPriority());
    this.newTaskTitle.set('');
  }

  onTitleInput(value: string): void {
    this.newTaskTitle.set(value);
  }

  onPriorityChange(value: string): void {
    this.newTaskPriority.set(value as Priority);
  }
}
