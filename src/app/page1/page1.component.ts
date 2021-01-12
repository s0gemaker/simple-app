import {Component, OnDestroy, OnInit} from '@angular/core';
import {DataService} from '../data.service';
import {Book} from '../model/Book';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit, OnDestroy {

  pageName = 'Page 1';
  books: Array<Book>;
  numberOfBooksWrittenByMisty: number;

  subscription: Subscription;

  constructor(public dataService: DataService) {
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.pageName = 'First page';
    }, 5000);
    this.books = this.dataService.books;
    this.numberOfBooksWrittenByMisty = this.books.filter(it => {
      return it.author === 'Misty';
    }).length;
    this.subscription = this.dataService.bookAddedEvent.subscribe((newBook) => {
        if (newBook.author === 'Misty') {
          this.numberOfBooksWrittenByMisty++;
        }
      }, (error) => {
        console.log('An error has occurred', error);
      },
      () => {
        // complete event
      }
    );

  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onButtonClick(): void {
    alert('Hello - the date today is ' + new Date());
  }


}
