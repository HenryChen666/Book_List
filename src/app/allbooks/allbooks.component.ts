import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Book} from '../books/model/book';
import {BooksService} from '../books/service/books.service';


@Component({
  selector: 'app-allbooks',
  templateUrl: './allbooks.component.html',
  styleUrls: ['./allbooks.component.css']
})
export class AllbooksComponent implements OnInit {
  selectedBook: Book;
  selectedBook2: Book;
  selectedBook3: Book;
  selectedBook4: Book;
  selectedBook5: Book;
  selectedBook6: Book;
  selectedBook7: Book;
  selectedBook8: Book;
  selectedBook9: Book;
  selectedBook10: Book;

  constructor(private route: ActivatedRoute, private booksService: BooksService) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params.id;
      this.selectedBook = this.booksService.getBook("1001");
      this.selectedBook2 = this.booksService.getBook("1002");
      this.selectedBook3 = this.booksService.getBook("1003");
      this.selectedBook4 = this.booksService.getBook("1004");
      this.selectedBook5 = this.booksService.getBook("1005");
      this.selectedBook6 = this.booksService.getBook("1006");
      this.selectedBook7 = this.booksService.getBook("1007");
      this.selectedBook8 = this.booksService.getBook("1008");
      this.selectedBook9 = this.booksService.getBook("1009");
      this.selectedBook10 = this.booksService.getBook("1010");
    });
  }

}
