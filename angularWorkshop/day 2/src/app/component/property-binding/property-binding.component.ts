import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  name = 'Sam'
  imageurl = '../../assets/image/img1.jpg';
  isDisabled = true;

  toggle() {
    this.isDisabled = !this.isDisabled
  }
  someFunction(action:string){
    console.log(`You are trying..${action}`)
  }
}
