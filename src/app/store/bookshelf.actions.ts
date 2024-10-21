import { createAction, props } from '@ngrx/store';

export const addToBookshelf = createAction(
  '[Books] Add to Bookshelf',
  props<{ book: any }>()
);

export const removeFromBookshelf = createAction(
  '[Books] Remove from Bookshelf',
  props<{ bookId: string }>()
);

