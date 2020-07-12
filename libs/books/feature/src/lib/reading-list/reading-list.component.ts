import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { getReadingList, removeFromReadingList, updateReadingList } from '@tmo/books/data-access';
import { StorageService } from '@tmo/shared/storage';
import { Book, ReadingListItem } from '@tmo/shared/models';
// const KEY = '[okreads API] Reading List';
@Component({
  selector: 'tmo-reading-list',
  templateUrl: './reading-list.component.html',
  styleUrls: ['./reading-list.component.scss']
})
export class ReadingListComponent {
  readingList$ = this.store.select(getReadingList);
  date = new Date().toISOString();
  constructor(private store: Store) {}

  removeFromReadingList(item) {
    this.store.dispatch(removeFromReadingList({ item }));
  }

  updateReadingList(item) {
    this.store.dispatch(updateReadingList({item}));
  }
}
