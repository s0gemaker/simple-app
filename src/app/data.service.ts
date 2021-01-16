import {EventEmitter, Injectable} from '@angular/core';
import {Book} from './model/Book';

export interface DataServiceInterface {
  books: Array<Book>;
  bookAddedEvent: EventEmitter<Book>;

  bookDeletedEvent: EventEmitter<Book>;

  addBook(book: Book): void;

  deleteBook(): void;


}

@Injectable({
  providedIn: 'root'
})
export class DataService implements DataServiceInterface {

  books: Array<Book>;
  bookAddedEvent = new EventEmitter<Book>();

  bookDeletedEvent = new EventEmitter<Book>();


  constructor() {
    this.books = new Array<Book>();
    const book1 = new Book();
    book1.title = 'first book';
    book1.author = 'Misty';
    book1.price = 3.99;
    this.books.push(book1);

    const book2 = new Book();
    book2.title = 'second book';
    book2.author = 'Tabib';
    book2.price = 5.99;
    this.books.push(book2);

    const book3 = new Book();
    book3.title = 'third book';
    book3.author = 'Tasfia';
    book3.price = 7.99;
    this.books.push(book3);

  }

  addBook(book: Book): void {
    if (book.author === 'Monitur') {
      this.bookAddedEvent.error('Books by Jame are not allowed');
    } else {
      this.books.push(book);
      this.bookAddedEvent.emit(book);
    }
  }

  deleteBook(): void {
    if (this.books.length > 0) {
      const book = this.books.pop();
      this.bookDeletedEvent.emit(book);

    } else {
      this.bookDeletedEvent.error('There are no books left to delete');
    }

  }
}
