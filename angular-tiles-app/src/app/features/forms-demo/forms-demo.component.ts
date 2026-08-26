import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { TaskStoreService } from '../../core/services/task-store.service';

@Component({
  selector: 'app-forms-demo',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './forms-demo.component.html',
  styleUrl: './forms-demo.component.scss',
})
export class FormsDemoComponent {
  private readonly fb = inject(FormBuilder);
  readonly store = inject(TaskStoreService);

  // --- Reactive form ---
  readonly taskForm = this.fb.nonNullable.group({
    title: ['', [Validators.required, Validators.minLength(3)]],
    priority: ['medium', Validators.required],
    dueDate: [''],
  });

  readonly submittedTask = signal<string | null>(null);

  // --- Template-driven form ---
  newsletter = { name: '', email: '', subscribe: true };
  readonly newsletterSubmitted = signal(false);

  get title() {
    return this.taskForm.controls.title;
  }

  submitReactiveForm(): void {
    if (this.taskForm.invalid) {
      this.taskForm.markAllAsTouched();
      return;
    }
    const { title, priority } = this.taskForm.getRawValue();
    this.store.addTask(title, priority as 'low' | 'medium' | 'high');
    this.submittedTask.set(title);
    this.taskForm.reset({ title: '', priority: 'medium', dueDate: '' });
  }

  submitNewsletterForm(): void {
    this.newsletterSubmitted.set(true);
  }
}
