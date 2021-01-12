import {Component, Input, OnInit} from '@angular/core';
import {DataService} from '../data.service';
import {Book} from '../model/Book';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  @Input()
  lastAccessed = '';

  constructor(public dataService: DataService) {
  }

  ngOnInit(): void {
  }

  addBook(): void {
    const book = new Book();
    book.title = 'new fiction book';
    book.author = 'Misty';
    this.dataService.addBook(book);
  }

  addBook2(): void {
    const book = new Book();
    book.title = 'new fiction book';
    book.author = 'Monitur';
    this.dataService.addBook(book);
  }

}
