import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appForviewChild]'
})
export class ForviewChildDirective {

  childData = 'Data From child';

  constructor(elem: ElementRef, renderer: Renderer2) {
    let txt = renderer.createText('new Text from directive');
    renderer.appendChild(elem.nativeElement, txt);
  }

}
