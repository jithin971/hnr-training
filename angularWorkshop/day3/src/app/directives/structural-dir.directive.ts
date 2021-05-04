import { Directive, ElementRef, HostListener, Input, OnInit, Renderer2, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appStructuralDir]'
})
export class StructuralDirDirective {
  // ElementRef is simply like document.getElementById('myId');

  // TemplateRef is an embedded template which you can use 
  // in ViewContainerRef.createEmbeddedView to create Embedded View.

  // ViewContainerRef represents a container where one or more views can be attached.
  // clear() : void
  // insert(viewRef: ViewRef, index?: number) : ViewRef
  // get(index: number) : ViewRef
  // indexOf(viewRef: ViewRef) : number
  // detach(index?: number) : ViewRef
  // move(viewRef: ViewRef, currentIndex: number) : ViewRef

  constructor(private template: TemplateRef<any>,
    private container: ViewContainerRef) { }

  @Input() set appStructuralDir(delay) {

    setTimeout(() => {
      console.log(this.template)
      this.container.createEmbeddedView(this.template);
    }, delay);

    // let flag = 0
    // setInterval(() => {
    //   if(flag==0){
    //     this.container.createEmbeddedView(this.template);
    //     flag=1
    //   }
    //   else{
    //     this.container.clear()
    //     flag=0
    //   }

    // })
  }

}
