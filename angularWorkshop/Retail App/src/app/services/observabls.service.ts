import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, forkJoin, interval, ReplaySubject, Subject } from 'rxjs';
import { map, take } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ObservablsService {

  subjex=new Subject()
  behavioralEx=new BehaviorSubject(0)
  replaySub=new ReplaySubject(3)
  constructor(private http:HttpClient) {

    this.replaySub.next(0)
    this.replaySub.next(1)
    this.replaySub.next(2)
    this.replaySub.next(3)
   }

  // pipe is an Observable method which is used for composing operators.
  //  In more simpler terms, this allows us to chain operators together.
  obser1() {
    const numbers = interval(1000);
    const takeThree = numbers.pipe(
      take(3),
      map((v) => Date.now())
    );
    takeThree.subscribe(value => console.log("Subscriber: " + value));
  }

  forkjoin(){
    let response1 = this.http.get("http://localhost:3000/posts");
    let response2 = this.http.get("http://localhost:3000/comments");
    return forkJoin([response1, response2]);
  }

}

// BehaviorSubject: A Subject that requires an initial value and emits its current
//  value to new subscribers.

// observable is a Generic,

// Observables are lazy collections of multiple values over time.

// Is just a function, no state

// Code run for each observer
