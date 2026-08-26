import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, interval, of } from 'rxjs';
import { delay, map, switchMap } from 'rxjs/operators';

export interface Quote {
  text: string;
  author: string;
}

/**
 * Demonstrates classic RxJS usage: `of`, `delay`, `interval`,
 * `BehaviorSubject` and operators like `switchMap` / `map`.
 */
@Injectable({ providedIn: 'root' })
export class DataService {
  private readonly quotes: Quote[] = [
    { text: 'Simplicity is the soul of efficiency.', author: 'Austin Freeman' },
    { text: 'Programs must be written for people to read.', author: 'Harold Abelson' },
    { text: 'First, solve the problem. Then, write the code.', author: 'John Johnson' },
    { text: 'Make it work, make it right, make it fast.', author: 'Kent Beck' },
    { text: 'Any fool can write code a computer can understand.', author: 'Martin Fowler' },
  ];

  private readonly searchTerm$ = new BehaviorSubject<string>('');

  /** Simulated async fetch of a random quote (RxJS `of` + `delay`). */
  getQuoteOfTheDay(): Observable<Quote> {
    const random = this.quotes[Math.floor(Math.random() * this.quotes.length)];
    return of(random).pipe(delay(500));
  }

  /** Emits an incrementing tick every second (RxJS `interval`). */
  getClockTick(): Observable<number> {
    return interval(1000);
  }

  setSearchTerm(term: string): void {
    this.searchTerm$.next(term);
  }

  /** Reactive search stream: re-runs the "query" whenever the term changes. */
  filteredQuotes(): Observable<Quote[]> {
    return this.searchTerm$.pipe(
      switchMap((term) =>
        of(this.quotes).pipe(
          delay(150),
          map((list) =>
            list.filter(
              (q) =>
                q.text.toLowerCase().includes(term.toLowerCase()) ||
                q.author.toLowerCase().includes(term.toLowerCase())
            )
          )
        )
      )
    );
  }
}
