import { Directive, ElementRef, HostBinding, HostListener, Input, Renderer2 } from '@angular/core';



@Directive({
  selector: '[appStrdir]'
})
export class StrdirDirective {
  @Input() appStrdir
  @Input() defaultColor: string;
  @Input() color: string;

//   TemplateRef: Reference to content enclosed within the container
// ViewContainerRef: Refers to the Container to which directive is applied
//The ElementRef gives the directive direct access to the DOM element upon which it’s attached.
//a platform independent way of setting properties on our elements via something called a Renderer

  constructor(private el: ElementRef,
    private renderer: Renderer2) {
  }
  ngOnInit() {
    console.log("asd",this.appStrdir)
    this.renderer.setStyle(this.el.nativeElement, 'background-color', this.appStrdir);
  }
  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.color?this.color:this.defaultColor);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.setStyle(this.el.nativeElement, 'border', '5px solid green');
    this.highlight(null);
  }
  // @HostListener('click') onClick() {
  //   alert();
  // }
  // HostBinding
  // @HostBinding lets you set properties on the element or component that hosts the directive, and 
  // @HostListener lets you listen for events on the host element or component.

  @HostBinding('style.border') border: string;
  
  @HostListener('mouseover') onMouseOver() {
    this.border = '5px solid green';
}
  private highlight(clr: string) {
    this.el.nativeElement.style.backgroundColor = clr;
    this.el.nativeElement.style.padding='10px';
  }
}
