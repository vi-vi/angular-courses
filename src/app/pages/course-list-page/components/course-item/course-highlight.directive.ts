import { Directive, Renderer2, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[borderColor]'
})
export class CourseBorderColorDirective {
  @Input() borderColor: number;

  constructor(private el: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit() {
    if (this.borderColor >= Date.now() - 14*24*60*60*1000 ) {
      this.setColor('green');
    }
    else {
      this.setColor('blue');
    }
  }

  private setColor(color: string): void {
    this.renderer.setStyle(this.el.nativeElement, 'border-color', color);
  }

}
