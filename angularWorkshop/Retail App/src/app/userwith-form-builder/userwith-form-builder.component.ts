import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, Validators, Validator } from '@angular/forms';

@Component({
  selector: 'app-userwith-form-builder',
  templateUrl: './userwith-form-builder.component.html',
  styleUrls: ['./userwith-form-builder.component.css']
})
export class UserwithFormBuilderComponent implements OnInit {
  contactForm
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.contactForm = this.formBuilder.group({
      firstname: ['', [Validators.required, Validators.minLength(10)]],
      lastname: ['', [Validators.required, Validators.maxLength(15), Validators.pattern("^[a-zA-Z]+$")]],
      email: ['', [Validators.required, Validators.email]],
      gender: ['', [Validators.required]],
      isMarried: ['', [Validators.required]],
      country: ['', [Validators.required]],
      age: ['', [Validators.required, this.validateAge]],
      phone: ['', [Validators.required]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]],
      address: this.formBuilder.group({
        city: ['', [Validators.required]],
        street: ['', [Validators.required]],
        pincode: ['', [Validators.required]],
      })
    }, { validators: [this.validatePassword] });
  }

  validateAge(control: AbstractControl) {
    if (control.value && control.value >= 100) {
      return { 'mismatchlength': true }
    }
    return null
  }

  validatePassword(control: AbstractControl) {
    console.log(control.get("password").value)
    if (control.get("password").value !== control.get("confirmPassword").value) {
      return { "mismatch password": true }
    }
    return null
  }

  get cfc() {
    return this.contactForm.controls;
  }
  get age() {
    return this.contactForm.get('age');
  }
  get phone() {
    return this.contactForm.get('phone');
  }

  get firstname() {
    return this.contactForm.get('firstname');
  }

  get lastname() {
    return this.contactForm.get('lastname');
  }

  get email() {
    return this.contactForm.get('email');
  }

  get gender() {
    return this.contactForm.get('gender');
  }

  get isMarried() {
    return this.contactForm.get('isMarried');
  }

  get country() {
    return this.contactForm.get('country');
  }

  get city() {
    return this.contactForm.get("address").get('city');
  }

  get street() {
    return this.contactForm.get("address").get('street');
  }

  get pincode() {
    return this.contactForm.get("address").get('pincode');
  }


  countryList: country[] = [
    new country("1", "India"),
    new country('2', 'USA'),
    new country('3', 'England')
  ];

  onSubmit() {
    console.log(this.contactForm.value);
  }
}
export class country {
  id: string;
  name: string;

  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }
}
