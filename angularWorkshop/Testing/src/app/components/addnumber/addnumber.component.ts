import { Component, OnInit } from '@angular/core';
import { TestService } from 'src/app/services/test.service';

@Component({
  selector: 'app-addnumber',
  templateUrl: './addnumber.component.html',
  styleUrls: ['./addnumber.component.css']
})
export class AddnumberComponent implements OnInit {

  constructor(private testService:TestService) { }
  users
  ngOnInit(): void {
    this.testService.all().subscribe(res => {
      this.users = res;
    });
  }

  add(first, second) {
    return first + second
  }
}
