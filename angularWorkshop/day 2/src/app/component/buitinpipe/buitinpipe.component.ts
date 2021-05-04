import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buitinpipe',
  templateUrl: './buitinpipe.component.html',
  styleUrls: ['./buitinpipe.component.css']
})
export class BuitinpipeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  name = "Sam john"
  designation="doctor"
  date=new Date()
  employee={name:'asd',age:20}
}
