import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  books = [
    { id: 0, name: "c++", price: 600 },
    { id: 0, name: "java", price: 800 }
  ]
  constructor() { }

  saveData(book) {
    this.books.push(book)
  }
}
