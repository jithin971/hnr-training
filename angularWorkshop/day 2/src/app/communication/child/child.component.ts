import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() employee
  @Output() approve = new EventEmitter()
  constructor() { }

  ngOnInit(): void {

  }
  removeEmployee(emp) {
    this.approve.emit(emp)
  }
}
