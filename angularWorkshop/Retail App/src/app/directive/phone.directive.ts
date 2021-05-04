import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator } from '@angular/forms';

@Directive({
  selector: '[appPhone]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: PhoneDirective,
      multi: true
    }
  ]
})
export class PhoneDirective implements Validator {

  constructor() { }

  validate(control: AbstractControl) {
    if (control.value && control.value.length != 10) {
      return { "invalidPhoneNumber": true }
    }
    return null
  }

}
