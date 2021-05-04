import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { LifecycleHelperComponent } from '../lifecycle-helper/lifecycle-helper.component';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css']
})
export class LifecycleComponent implements OnInit {
  name = ""
  counter = 10
  datfrmser
  flag=false
  constructor(private dataService: DataService) { }

  @ViewChild(LifecycleHelperComponent) lh: LifecycleHelperComponent

  ngOnInit(): void {
    this.datfrmser = this.dataService.getdataFromservice().subscribe(
      res => {
        console.log("data frm ser", res)
      }
    )

    setTimeout(()=>{
      this.flag=true
    },3000  )
  }


  inc() {
    this.counter++
  }

  getChild() {
    this.lh.clickMe()
  }


}
