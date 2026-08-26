import { Pipe, PipeTransform } from '@angular/core';

/** Custom pure pipe: shortens text and appends an ellipsis. */
@Pipe({ name: 'truncate', standalone: true })
export class TruncatePipe implements PipeTransform {
  transform(value: string | null | undefined, limit = 24, suffix = '…'): string {
    if (!value) return '';
    return value.length > limit ? value.slice(0, limit).trimEnd() + suffix : value;
  }
}
