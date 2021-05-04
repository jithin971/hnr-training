import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appValidateInput]'
})
export class ValidateInputDirective {

  @Input()appValidateInput
  constructor(private el: ElementRef,
    private renderer: Renderer2) {
   }

   @HostListener('blur')setinput(){
    //  debugger
    if( this.appValidateInput.invalid && (this.appValidateInput.dirty || this.appValidateInput.touched)){
      // this.renderer.setStyle(this.el.nativeElement, 'border', '2px solid red');
      this.renderer.removeClass(this.el.nativeElement,'has-success')
      this.renderer.addClass(this.el.nativeElement,'has-danger')
    }
    if( !this.appValidateInput.invalid && (this.appValidateInput.dirty || this.appValidateInput.touched)){
      // this.renderer.setStyle(this.el.nativeElement, 'border', '2px solid rgb(63, 104, 190)');
      this.renderer.addClass(this.el.nativeElement,'has-success')
    }
   }
}

// Import ElementRef from @angular/core. 
// ElementRef grants direct access to the host DOM element through its nativeElement property.

// The Renderer2 class is an abstraction provided by Angular in the form of a service that
//  allows to manipulate elements of your app without having to touch the DOM directly.
// Renderer2 createElement, createText and appendChild for creating and appending DOM
//  elements with directives in Angular 9,
// setAttribute and removeAttribute for dynamically setting and removing DOM attributes,
// addClass and removeClass for dynamically adding and removing classes in Angular 9 directive,
// setStyle and removeStyle for dyncamically setting and removing CSS styles,
// setProperty for setting DOM properties like href of <a> elements