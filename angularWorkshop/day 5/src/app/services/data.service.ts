import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Iuser } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  counter = 0
  counterObser = new Observable((obser) => {
    setInterval(() => {
      obser.next(this.counter++)
    }, 1000)
  })

  toUpdate

  constructor(private http: HttpClient) {

  }

  getDataFromhttp() {
    return this.http.get("http://localhost:3000/postsc")
    .pipe(
      map(res => this.modifyData(res)),
      catchError(err=>of(err))
      )
  }

  modifyData(data) {
    return data.map(res => this.alterData(res))
  }
  alterData(data) {
    console.log("data", data)
    let user = new Iuser()
    user.id = "ID-" + String(data.id)
    user.title = data.title;
    user.author = data.author

    return user
  }


  postData(obj) {
    return this.http.post(" http://localhost:3000/postsv ", obj)
  }

  delete(id) {
    return this.http.delete("http://localhost:3000/posts/" + id)
  }
  put(id, obj) {
    return this.http.put("http://localhost:3000/posts/" + id, obj)
  }

}
