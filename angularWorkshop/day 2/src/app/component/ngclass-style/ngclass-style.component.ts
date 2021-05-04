import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngclass-style',
  templateUrl: './ngclass-style.component.html',
  styleUrls: ['./ngclass-style.component.css']
})
export class NgclassStyleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  people = [
    {
      name: "john",
      age: 30,
      country: 'INDIA'
    },
    {
      name: "abc",
      age: 70,
      country: 'UK'
    },
    {
      name: "xyz",
      age: 20,
      country: 'USA'
    }
  ]

  getColor(country) {
    console.log(country)
    switch(country){
      case 'UK':
        return 'green';
      case 'USA':
        return 'blue';
      case 'INDIA':
        return 'red';
      default:
        return 'black'
    }
  }
}
