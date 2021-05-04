import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-lifecyclechild',
  templateUrl: './lifecyclechild.component.html',
  styleUrls: ['./lifecyclechild.component.css']
})
export class LifecyclechildComponent implements OnInit, OnChanges, DoCheck, AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy {

  @Input() counter
  // @Input() xyz

  myCounter=""

  message="Welcome to child"
  constructor() {
    console.log("constructor")
  
  }

  displayData(val){
    this.myCounter=`My counter Value=${val}`
  }

  ngOnChanges(changes:SimpleChanges) {
    console.log("ngOnChanges",changes)
    if(changes&&changes.counter&& changes.counter.currentValue){
      this.displayData(changes.counter.currentValue)
    }

  }

  ngOnInit(): void {
    console.log("ngOnInit")
   
  }
  ngDoCheck() {
    console.log("ngDoCheck")
  }
  ngAfterContentInit() {
    console.log("ngAfterContentInit")
  }
  ngAfterContentChecked(){
    console.log("ngAfterContentChecked")
  }
  ngAfterViewInit(){
    console.log("ngAfterViewInit")
  }
  ngAfterViewChecked(){
    console.log("ngAfterViewChecked")
  }

  modifyMesssage(){
    this.message="Modifed By parent"
  }

  ngOnDestroy(){
    console.log("ngOnDestroy")
  }
}
