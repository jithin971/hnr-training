import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTitle]'
})
export class TitleDirective implements OnInit {
  @Input() appTitle
  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.renderer.setStyle(this.el.nativeElement, 'background-color', this.appTitle);
    this.renderer.setStyle(this.el.nativeElement, 'border', '1px solid black');
    this.renderer.setStyle(this.el.nativeElement, 'width', '200px');
  }
  ngOnInit() {


  }
}
