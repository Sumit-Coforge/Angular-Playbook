import { AsyncPipe } from '@angular/common';
import { Component, DestroyRef, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Observable } from 'rxjs';
import { DataService, Quote } from '../../core/services/data.service';

@Component({
  selector: 'app-observables-demo',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './observables-demo.component.html',
  styleUrl: './observables-demo.component.scss',
})
export class ObservablesDemoComponent {
  private readonly dataService = inject(DataService);
  private readonly destroyRef = inject(DestroyRef);

  /** RxJS `interval` bridged into a Signal via `toSignal`. */
  readonly tick = toSignal(this.dataService.getClockTick(), { initialValue: 0 });

  /** Observable consumed the classic way, through the `async` pipe. */
  readonly filteredQuotes$: Observable<Quote[]> = this.dataService.filteredQuotes();

  readonly quoteOfTheDay = signal<Quote | null>(null);
  readonly loadingQuote = signal(false);

  searchTerm = '';

  constructor() {
    // Kick off an initial search so the list isn't empty on load.
    this.dataService.setSearchTerm('');
  }

  fetchQuote(): void {
    this.loadingQuote.set(true);
    const sub = this.dataService.getQuoteOfTheDay().subscribe((quote) => {
      this.quoteOfTheDay.set(quote);
      this.loadingQuote.set(false);
    });
    this.destroyRef.onDestroy(() => sub.unsubscribe());
  }

  onSearchInput(value: string): void {
    this.searchTerm = value;
    this.dataService.setSearchTerm(value);
  }
}
