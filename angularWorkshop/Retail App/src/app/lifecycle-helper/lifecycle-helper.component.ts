import { Component, ContentChild, DoCheck, ElementRef, Input, OnChanges, OnInit, SimpleChange, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-lifecycle-helper',
  templateUrl: './lifecycle-helper.component.html',
  styleUrls: ['./lifecycle-helper.component.css']
})
export class LifecycleHelperComponent implements OnInit, OnChanges, DoCheck {
  @Input() name
  @Input() counter
  toDisplay
  constructor() {
    console.log(`new/constructor `);

  }
  @ViewChild('wrapper') wrapper: ElementRef;
  @ContentChild('myContent') content: ElementRef;
  ngOnChanges(changes: SimpleChanges) {
    console.log(`ngOnChanges - data is `, changes);
    // if (changes && changes.counter && changes.counter.currentValue) {
    //   this.displayCounter(changes.counter.currentValue)
    // }
  }
  displayCounter(val) {
    this.toDisplay = `Your counter Value=${val}`
  }

  ngOnInit() {
    console.log(`ngOnInit  - data is ${this.name}`);

  }

  ngDoCheck() {
    console.log("ngDoCheck")
  }

  ngAfterContentInit() {
    console.log("ngAfterContentInit");
    console.log('ngAfterContentInit - wrapper', this.wrapper);
    // console.log('ngAfterContentInit - content', this.content);
    // this.content.nativeElement.textContent="ngAfterContentInit"
  }

  ngAfterContentChecked() {
    console.log("ngAfterContentChecked");
  }

  ngAfterViewInit() {
    console.log("ngAfterViewInit");
    console.log('ngAfterViewInit - wrapper', this.wrapper);
    console.log('ngAfterViewInit - content', this.content);

  }

  ngAfterViewChecked() {
    console.log("ngAfterViewChecked");
  }

  ngOnDestroy() {
    console.log("ngOnDestroy");
  }

  clickMe() {
    console.log("Button clicked")
  }
}

//Using life-cycle hooks we can fine tune the behaviour of our components during creation, update and destruction.

//ngAfterVIewChecked is called every time Angular has finished 
// running change detection on a component and it's children.
//  ngAfterViewInit is called only during first change detection cycle
//https://codecraft.tv/courses/angular/components/lifecycle-hooks/

// Content & View. The hooks AfterConentInit & AfterContentChecked deals with the Content,
//  While AfterViewInit, AfterViewChecked deals with the View.

// ngDoCheck: This is fired each time anything that can trigger change detection has fired 
// (e.g. click handlers, HTTP requests, route changes, etc…). This lifecycle hook is mostly
//  used for debug purposes;

// ngAfterContentInit: called after external content has been projected into the component.
//  Remember content queries like @ContentChildren and @ContentChild are set before the 
//  hook callback is called;

// ngAfterContentChecked: called after every check of component content;

// ngAfterViewInit: called after component’s view(s) are initialized. Perfect 
// for initializing event third party library, that needs the view be composed 
// before taking any action (note that a view differs from content because a 
// components view is the non-projected template);

// ngAfterViewChecked: called after every check of a component’s view(s);