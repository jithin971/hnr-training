import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Iuser } from '../models/user';
import { take, map, filter, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  item = [];
  isUserLogged = false

  counter = 0
  counterObser = new Observable((observer) => {
    setInterval(() => {
      observer.next(this.counter++)
      // console.log(this.counter)
    }, 1000)
    // for (var i = 1; i <= 10; i++) {

    //   // Calls the next observable
    //   // notification
    //   observer.next(i);
    // }
    // observer.complete();
  })
  constructor(private http: HttpClient) {
    // setInterval(()=>{
    //   this.counter++
    //   console.log(this.counter)
    // },1000)
  }


  saveData(data) {
    this.item.push(data)
  }




  set setCounter(val) {
    this.counter += val
    console.log(this.counter)
  }
  get getcounder() {
    return this.counter
  }

  getdataFromservice() {
    return this.http.get<Iuser>("http://localhost:3000/posts")
    .pipe(
      map((res) => this.setData(res)),
      catchError(err => of('there was an error'))
    )
  }
  setData(data) {
    
   return data.map(res=>this.alterData(res))
  }

  alterData(data){
    console.log("d", data)
    let idta=new Iuser()
    idta.id='id'+String(data.id)
    idta.title=data.title
    idta.author=data.author
    return idta
  }

  getDataFromhttp() {
    return this.http.get("http://localhost:3000/posts")
  }

  postData(obj) {
    return this.http.post(" http://localhost:3000/posts ", obj)
  }

  delete(id) {
    return this.http.delete("http://localhost:3000/posts/" + id)
  }
  put(id, obj) {
    return this.http.put("http://localhost:3000/posts/" + id, obj)
  }
}
