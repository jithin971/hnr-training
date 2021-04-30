import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-viewall',
  templateUrl: './viewall.component.html',
  styleUrls: ['./viewall.component.css']
})
export class ViewallComponent implements OnInit {
  books
  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.books= this.bookService.books
  }

}
