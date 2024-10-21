import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectBookshelf } from '../../store/bookshelf.selectors';
import { removeFromBookshelf } from '../../store/bookshelf.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-bookshelf',
  templateUrl: './bookshelf.component.html',
  styleUrls: ['./bookshelf.component.scss']
})
export class BookshelfComponent {
  books$: Observable<any>; 
  constructor(private readonly store: Store) {
    this.books$ = this.store.select(selectBookshelf);
  }

  removeFromBookshelf(bookId: string) {
    this.store.dispatch(removeFromBookshelf({ bookId }));
  }
}

