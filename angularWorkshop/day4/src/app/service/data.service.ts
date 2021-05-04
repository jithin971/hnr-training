import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { 
    this.getDataFromServer()
    this.PostDataToServer()
    this.PutDataToServer()
    this.DeleteDataToServer()
  }
  logedin = true
  child=false
  employee = [
    {
      id: 0,
      name: "john",
      age: 20
    },
    {
      id: 1,
      name: "Raju",
      age: 30
    }
  ]

  getDetails(id) {
    return this.employee.filter(res => res.id == id)
  }

  getDataFromServer(){
    this.http.get("https://jsonplaceholder.typicode.com/todos/1").subscribe(
      res=>{
        console.log(res)
      }
    )
  }

  PostDataToServer(){
    this.http.post("https://jsonplaceholder.typicode.com/posts",{id:10,title:'asd'}).subscribe(
      res=>{
        console.log(res)
      }
    )
  }
  PutDataToServer(){
    this.http.put("https://jsonplaceholder.typicode.com/posts/1",{id:10,title:'asd'}).subscribe(
      res=>{
        console.log(res)
      }
    )
  }
  DeleteDataToServer(){
    this.http.delete("https://jsonplaceholder.typicode.com/posts/1").subscribe(
      res=>{
        console.log(res)
      }
    )
  }

}
