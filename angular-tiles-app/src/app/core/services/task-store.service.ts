import { Injectable, computed, signal } from '@angular/core';
import { Priority, Task } from '../models/task.model';

/**
 * Signal-based state store. Demonstrates `signal`, `computed` and
 * immutable state updates without RxJS or NgRx.
 */
@Injectable({ providedIn: 'root' })
export class TaskStoreService {
  private nextId = 4;

  readonly tasks = signal<Task[]>([
    { id: 1, title: 'Learn Angular signals', done: true, priority: 'high', createdAt: new Date(Date.now() - 1000 * 60 * 90) },
    { id: 2, title: 'Build a tiles dashboard', done: false, priority: 'medium', createdAt: new Date(Date.now() - 1000 * 60 * 30) },
    { id: 3, title: 'Write custom pipes & directives', done: false, priority: 'low', createdAt: new Date(Date.now() - 1000 * 60 * 5) },
  ]);

  readonly totalCount = computed(() => this.tasks().length);
  readonly completedCount = computed(() => this.tasks().filter((t) => t.done).length);
  readonly pendingCount = computed(() => this.totalCount() - this.completedCount());
  readonly progress = computed(() =>
    this.totalCount() === 0 ? 0 : Math.round((this.completedCount() / this.totalCount()) * 100)
  );

  addTask(title: string, priority: Priority = 'medium'): void {
    const trimmed = title.trim();
    if (!trimmed) return;
    this.tasks.update((list) => [
      ...list,
      { id: this.nextId++, title: trimmed, done: false, priority, createdAt: new Date() },
    ]);
  }

  toggleTask(id: number): void {
    this.tasks.update((list) => list.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));
  }

  removeTask(id: number): void {
    this.tasks.update((list) => list.filter((t) => t.id !== id));
  }
}
