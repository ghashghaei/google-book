import { createFeatureSelector, createSelector } from '@ngrx/store';

export const selectBookshelf = createFeatureSelector<any[]>('bookshelf');

export const selectBookCount = createSelector(
  selectBookshelf,
  (bookshelf) => bookshelf.length
);
