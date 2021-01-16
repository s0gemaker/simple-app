import {Book} from '../model/Book';
import {EventEmitter} from '@angular/core';
import {DataServiceInterface} from '../data.service';

export class MockDataService implements DataServiceInterface {
  books = new Array<Book>();
  bookAddedEvent = new EventEmitter<Book>();

  bookDeletedEvent = new EventEmitter<Book>();

  addBook(book: Book): void {
    this.bookAddedEvent.emit(book);

  }

  deleteBook(): void {
  }

}
