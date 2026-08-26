import { Pipe, PipeTransform } from '@angular/core';

/** Custom pure pipe: filters an array of objects by a field/value match. */
@Pipe({ name: 'filterBy', standalone: true })
export class FilterByPipe implements PipeTransform {
  transform<T, K extends keyof T>(items: T[] | null, field: K, value: unknown): T[] {
    if (!items) return [];
    if (value === null || value === undefined || value === '' || value === 'all') return items;
    return items.filter((item) => item[field] === value);
  }
}
