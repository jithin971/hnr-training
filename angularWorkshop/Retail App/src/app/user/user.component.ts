import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  langs: string[] = ["English", "French", "German"];
  myform: FormGroup;
  password: FormControl;
  constructor() { }

  ngOnInit(): void {
    this.password = new FormControl("", [
      Validators.required,
      Validators.minLength(8)
    ])
    this.myform = new FormGroup({
      name: new FormControl("", Validators.required),
      email: new FormControl("", [
        Validators.required,
        Validators.email
      ]),
      password: this.password,
      language: new FormControl("", Validators.required)
    });

  }


  onSubmit() {
    if (this.myform.valid) {
      console.log("Form Submitted!");
      console.log(this.myform.value);
      this.myform.reset();
    }
  }


}


// FormGroup new = new object created - has to be deleted manually (NOT GOOD FOR APPLICATION MEMORY PERFORMANCE)
// FormBuilder(helper class)

// creating FormBuilder object (Removing 'new' keyword)
// it needs to be injected in constructor