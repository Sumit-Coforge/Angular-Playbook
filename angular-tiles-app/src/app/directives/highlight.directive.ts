import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

/** Custom attribute directive: highlights the host element on hover. */
@Directive({
  selector: '[appHighlight]',
  standalone: true,
})
export class HighlightDirective {
  @Input('appHighlight') highlightColor = '#fff59d';

  private originalBackground = '';

  constructor(private readonly el: ElementRef<HTMLElement>, private readonly renderer: Renderer2) {}

  @HostListener('mouseenter')
  onMouseEnter(): void {
    this.originalBackground = this.el.nativeElement.style.backgroundColor;
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', this.highlightColor || '#fff59d');
  }

  @HostListener('mouseleave')
  onMouseLeave(): void {
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', this.originalBackground);
  }
}
