import { Component } from '@angular/core';
import { GoogleBooksService } from '../../services/google-books.service';
import { Observable } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { addToBookshelf } from '../../store/bookshelf.actions';

@Component({
  selector: 'app-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.scss']
})
export class BookSearchComponent {
  books$:  any[]=[];
  searchQuery: string = '';

  

constructor(private googleBooksService: GoogleBooksService, private readonly store: Store) {}

searchBooks() {
  if (this.searchQuery) {
    let response = this.googleBooksService.searchBooks(this.searchQuery);
    response.subscribe({
      next: (data:any) => {this.books$ = data.items},
      error: (error) => console.error('Error fetching books:', error)
    });
  }
}

rateBook(book: any, rating: number) {
  book.userRating = rating;
  localStorage.setItem('book', JSON.stringify(this.books$));
}
  addToBookshelf(book: any) {
    this.store.dispatch(addToBookshelf({ book }));
  }
  
}


