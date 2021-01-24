import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[em-tooltip]'
})
export class TooltipDirective {

  @Input('em-tooltip') tooltipTitle: string;
  @Input('em-tooltip-placement') placement: string;
  tooltip: HTMLElement;

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @HostListener('mouseenter') onMouseEnter() {
    if (!this.tooltip) { this.show(); }
  }

  show() {
    this.tooltip = this.renderer.createElement('span');
    this.renderer.addClass(this.tooltip, `em-tooltiptext`);
    this.renderer.addClass(this.tooltip, `em-tooltiptext-${this.placement}`);
    this.renderer.appendChild(
      this.tooltip,
      this.renderer.createText(this.tooltipTitle)
    );
    this.renderer.addClass(this.el.nativeElement, `em-tooltip`);
    this.renderer.appendChild(this.el.nativeElement, this.tooltip);
  }

}