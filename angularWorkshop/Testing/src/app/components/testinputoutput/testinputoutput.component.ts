import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-testinputoutput',
  templateUrl: './testinputoutput.component.html',
  styleUrls: ['./testinputoutput.component.css']
})
export class TestinputoutputComponent implements OnInit {

  constructor() { }
  @Output() loggedIn = new EventEmitter<User>();
  @Input() enabled = true;

  login(email, password) {
    console.log(`Login ${email} ${password}`);
    if (email && password) {
      console.log(`Emitting`);
      this.loggedIn.emit(new User(email, password));
    }
  }
  ngOnInit(): void {
  }

}
export class User {
  constructor(public email: string, public password: string) {
  }
}