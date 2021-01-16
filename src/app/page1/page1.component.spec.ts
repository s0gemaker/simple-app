import {ComponentFixture, TestBed} from '@angular/core/testing';

import {Page1Component} from './page1.component';
import {Book} from '../model/Book';
import {MockDataService} from '../mocks/MockDataService';
import {DataService} from '../data.service';

describe('Page1Component', () => {
  let component: Page1Component;
  let fixture: ComponentFixture<Page1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Page1Component],
      providers: [{provide: 'DataServiceInterface', useExisting: DataService}],

    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Page1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('number of books written by Misty is incremented correctly', () => {
    const book = new Book();
    book.author = 'Misty';
    const dataService = fixture.debugElement.injector.get(DataService);
    const startValue = component.numberOfBooksWrittenByMisty;
    dataService.addBook(book);
    expect(component.numberOfBooksWrittenByMisty).toEqual(startValue + 1);
  });


  it('Number of books written by Misty is incremented correctly version 2', () => {
    const book = new Book();
    book.author = 'Misty';
    const dataService = new MockDataService();
    component = new Page1Component(dataService);
    component.ngOnInit();
    const startValue = component.numberOfBooksWrittenByMisty;
    dataService.addBook(book);
    expect(component.numberOfBooksWrittenByMisty).toEqual(startValue + 1);
  });
});
