import { Directive, Renderer2, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appBorderColor]'
})

export class CourseBorderColorDirective implements OnInit {
  @Input() appBorderColor: number;

  constructor(private el: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit() {
    if ( this.appBorderColor >= Date.now() - 14 * 24 * 60 * 60 * 1000 ) {
      this.setColor('green');
    } else {
      this.setColor('blue');
    }
  }

  private setColor(color: string): void {
    this.renderer.setStyle(this.el.nativeElement, 'border-color', color);
  }

}
