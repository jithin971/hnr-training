import { HttpHeaders } from '@angular/common/http';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { LifecyclechildComponent } from '../lifecyclechild/lifecyclechild.component';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css']
})
export class LifecycleComponent implements OnInit,OnDestroy {

  counter = 0

  counterFromService
  posts
  counterSub

  @ViewChild(LifecyclechildComponent)ls:LifecyclechildComponent
  
  constructor(private dataser: DataService) { }

  ngOnInit(): void {
    //  this.counterFromService= this.dataser.counter
    this.counterSub=this.dataser.counterObser.subscribe(
      result => {
        console.log("result", result)
        this.counterFromService = result
      }
    )

    this.dataser.getDataFromhttp().subscribe(
      (res) => {
        console.log(res)
        this.posts = res
      }
    )
  }

  incrementCounter() {
    this.counter++
    console.log(this.counter)
  }
  saveData(){

    // this.dataser.postData( { "id":4, "title": "json-server", "author": "typicode" }).subscribe(
    //   res=>{
    //     console.log(res)
    //   }
    // )
    this.ls.modifyMesssage()
  }

  deleteData(){
    // this.dataser.delete().subscribe(res=>{
    //   console.log("delete",res)
    // })
  }
  ngOnDestroy(){
    this.counterSub.unsubscribe();
  }
}
