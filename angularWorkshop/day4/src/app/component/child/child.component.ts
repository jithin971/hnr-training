import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() employee
  @Output() removeEmp = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }

  removeData(data) {
    this.removeEmp.emit(data)
  }
  
}
