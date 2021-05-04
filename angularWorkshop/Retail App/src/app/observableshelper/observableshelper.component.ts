import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { ObservablsService } from '../services/observabls.service';

@Component({
  selector: 'app-observableshelper',
  templateUrl: './observableshelper.component.html',
  styleUrls: ['./observableshelper.component.css']
})
export class ObservableshelperComponent implements OnInit {

  constructor(private dataService: DataService, private os: ObservablsService) { }
  myData = "text from child childData"
  ngOnInit(): void {
    this.os.obser1()
    this.os.subjex.subscribe(res => {
      console.log("subj", res)
    })
    this.os.behavioralEx.subscribe(res => {
      console.log("BEhaversubj", res)
    })

    this.os.forkjoin().subscribe(
      res=>{
        console.log(res)
      }
    )
  }

  setCounter(i = 0) {
    this.dataService.setCounter = i
  }

  setAlert() {
    alert()
  }
  subject() {
    this.os.subjex.next(100)
  }
  behavSub() {
    this.os.behavioralEx.next(200)
  }
  replaySub(){
    this.os.replaySub.subscribe(
      res=>{
        console.log("responce from replay sub",res)
      }
    )
  }
}
