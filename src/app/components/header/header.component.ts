import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectBookCount } from '../../store/bookshelf.selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  bookCount$: Observable<number>; 

  constructor(private store: Store) {
    this.bookCount$ = this.store.select(selectBookCount);
  }
}

