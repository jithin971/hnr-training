import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-viewall',
  templateUrl: './viewall.component.html',
  styleUrls: ['./viewall.component.css']
})
export class ViewallComponent implements OnInit {
  allItem
  constructor(private ds: DataService) { 
    this.allItem=ds.item
    console.log( this.allItem)
  }

  ngOnInit(): void {
  }

}
