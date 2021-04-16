import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  item=[];
  isUserLogged=false
  saveData(data){
    this.item.push(data)
  }
}
