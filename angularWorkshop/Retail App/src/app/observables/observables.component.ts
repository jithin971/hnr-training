import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { fromEvent, Observable, observable } from 'rxjs';
import { ForviewChildDirective } from '../directive/forview-child.directive';
import { ObservableshelperComponent } from '../observableshelper/observableshelper.component';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.css']
})
export class ObservablesComponent implements OnInit, AfterViewInit, OnDestroy {

  count

  constructor(private dataService: DataService, private cdr: ChangeDetectorRef) { }

  observerSub
  ngOnInit(): void {
    // this.count = this.dataService.getcounder
    this.observerSub = this.dataService.counterObser.subscribe((res) => {
      // console.log(res)
      this.count = res
    }
    )

  }

  //ViewChild to access component
  @ViewChild('someInput') someInput: ElementRef;

  //ViewChild to access directive
  // We used a setter here to set the extraCreature variable. Notice that we wait for the AfterViewInit 
  // lifecycle hook to access our variable, as this is when child components and directives become available.
  childText
  @ViewChild(ForviewChildDirective)
  set appShark(directive: ForviewChildDirective) {
    // directive.childData="data changed from parent"
    this.childText = directive.childData;
  };

  ngAfterViewInit() {

    //ViewChild to access component
    this.someInput.nativeElement.value = 'Raghu';

    console.log("appShark", this.childText);
    this.cdr.detectChanges();
  }

  ngOnDestroy() {
    this.observerSub.unsubscribe();
  }
}


// Observables provide support for data sharing between publishers and subscribers
//  in an angular application. It is referred to as a better technique for event handling, 
//  asynchronous programming, and handling multiple values as compared to techniques like promises.

// Observers: To handle receiving observable messages, we need an observable interface which consists 
// of callback methods with respect to the messages by observables. Some of the basic methods are as follows: 
// next: It is a handler for each message by observable, it may be called zero or more times after execution starts.


// A ViewChild is a component, directive, or element as a part of a template. If we want to access a child 
// component, directive, DOM element inside the parent component, we use the decorator @ViewChild()
//  in Angular. ... Since the child component can be located inside the parent component, it can accessed as @ViewChild.
//https://www.digitalocean.com/community/tutorials/angular-viewchild-access-component