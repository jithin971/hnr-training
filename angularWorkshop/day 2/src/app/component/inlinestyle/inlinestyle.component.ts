import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inlinestyle',
  templateUrl: './inlinestyle.component.html',
  styles: [`p{color:red}`]
})
export class InlinestyleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
