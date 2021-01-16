import {Component, OnDestroy, OnInit} from '@angular/core';
import {DataService} from '../data.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.css']
})
export class Page3Component implements OnInit, OnDestroy {

  constructor(public dataService: DataService) {
  }

  subscription: Subscription;

  ngOnInit(): void {
    this.subscription = this.dataService.bookDeletedEvent.subscribe((book) => {
        alert(`The book called ${book.title} was deleted`);
      }, (error) => {
        alert('No books deleted - the error was ' + error);
      }
    );
  }

  deleteLastBook(): void {
    this.dataService.deleteBook();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
