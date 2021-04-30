import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private fb:FormBuilder) { }
  createBook
  ngOnInit(): void {
    this.createBook=this.fb.group([
      {
        "id":["",[Validators.required]]
      },
      {
        "name":["",[Validators.required]]
      },
      {
        "price":["",[Validators.required]]
      }
    ])
  }

}
