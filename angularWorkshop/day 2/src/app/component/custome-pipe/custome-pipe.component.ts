import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custome-pipe',
  templateUrl: './custome-pipe.component.html',
  styleUrls: ['./custome-pipe.component.css']
})
export class CustomePipeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  employees = [{
    name: 'xyz',
    age: 20,
    salary: 1000
  },
  {
    name: 'abc',
    age: 60,
    salary: 10000
  },
  {
    name: 'pqr',
    age: 30,
    salary: 5000
  }]

}
