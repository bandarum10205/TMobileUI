import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getReadingList, removeFromReadingList, updateReadingList, getAllBooks } from '@tmo/books/data-access';
import { StorageService } from '@tmo/shared/storage';
import { Book, ReadingListItem } from '@tmo/shared/models';
// const KEY = '[okreads API] Reading List';
@Component({
  selector: 'tmo-reading-list',
  templateUrl: './reading-list.component.html',
  styleUrls: ['./reading-list.component.scss']
})
export class ReadingListComponent implements OnInit {
  readingList$ = this.store.select(getReadingList);
  date = new Date().toISOString();
  constructor(private store: Store) {}

  ngOnInit(): void {
    // this.store.select(getReadingList).subscribe(books => {
      //this.readingList$ = books;
    //});
  }


  removeFromReadingList(item) {
    this.store.dispatch(removeFromReadingList({ item }));
  }

  updateReadingList(item) {
    this.store.dispatch(updateReadingList({item}));
  }
}
