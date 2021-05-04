import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  name
  age
  employee = [{
    name: 'xyx',
    age: 10
  },
  {
    name: 'abc',
    age: 20
  }]
  
  saveData() {
    this.employee.push({ name: this.name, age: this.age })
  }

  approve(data) {
    console.log(data)
    this.employee.forEach((val,key)=>{
      if(val.name==data.name){
        this.employee.splice(key,1)
      }
    })
  }
}
