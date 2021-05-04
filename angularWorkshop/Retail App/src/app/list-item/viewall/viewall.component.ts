import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Iuser } from 'src/app/models/user';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-viewall',
  templateUrl: './viewall.component.html',
  styleUrls: ['./viewall.component.css']
})
export class ViewallComponent implements OnInit {
  itemObser: Observable<any>
  itemdata
  constructor(private ds: DataService) {
    this.itemObser = ds.getdataFromservice()
    ds.getdataFromservice().subscribe(res => {
      console.log(res)
      this.itemdata = res
    },
      err => {
        console.log(err)
      })
  }

  ngOnInit(): void {
  }

}

// A pure pipe is only called when Angular detects a change
//  in the value or the parameters passed to a pipe. 
//  An impure pipe is called for every change detection cycle no matter whether
//   the value or parameter(s) changes.

// Async Pipe is an impure pipe that automatically subscribes to an observable to emit the latest values.
//  It not only subscribes to an observable, but it also subscribes to a promise and calls the then method. 
//  When the components get destroyed, it automatically unsubscribes them to reduce memory leaks.