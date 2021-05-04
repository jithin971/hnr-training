import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, forkJoin, interval, of, ReplaySubject, Subject } from 'rxjs';
import { map, take } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ObservblesService {


  subjetEx=new Subject();
  behavioralEX=new BehaviorSubject("No Data")
  replaySub=new ReplaySubject(3)

  constructor(private http:HttpClient) {
    this.mapfun()
    this.replaySub.next("trigger1")
    this.replaySub.next("trigger2")
    this.replaySub.next("trigger3")
    this.replaySub.next("trigger4")
  }

  checkpipe() {
    const number = interval(1000)
    const modifiedNum = number.pipe(
      take(5),
      map(res => Date.now())
    )
    modifiedNum.subscribe(
      res => {
        console.log(res)
      }
    )
  }

  mapfun() {
    const ex1 = of("hi hlo").pipe(map(res => `jithin${res}`))
    ex1.subscribe(res => {
      console.log("map", res)
    })
  }

  GetDataFromDiFFStream(){
    let res1=this.http.get("http://localhost:3000/posts")
    let res2=this.http.get("http://localhost:3000/profile")
    return forkJoin([res1,res2])
  }
}

