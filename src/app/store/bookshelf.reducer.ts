import { createReducer, on } from '@ngrx/store';
import { addToBookshelf, removeFromBookshelf } from './bookshelf.actions';

export const initialState: any[] = [];

const _bookshelfReducer = createReducer(
  initialState,
  on(addToBookshelf, (state, { book }) => [...state, book]),
  on(removeFromBookshelf, (state, { bookId }) => state.filter(book => book.id !== bookId))
);

export function bookshelfReducer(state: any, action: any) {
  return _bookshelfReducer(state, action);
}

