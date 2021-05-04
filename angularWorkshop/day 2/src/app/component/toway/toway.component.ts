import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toway',
  templateUrl: './toway.component.html',
  styleUrls: ['./toway.component.css']
})
export class TowayComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  name = "Sam";

  secondName
  setname(val) {
    this.name = val.value
  }
}
