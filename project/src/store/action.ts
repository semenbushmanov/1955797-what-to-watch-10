import { createAction } from '@reduxjs/toolkit';

export const changeGenre = createAction(
  'film/changeGenre',
  (value) => ({payload: value,})
);
export const getFilms = createAction('film/getFilms');
export const getPromoFilm = createAction('film/getPromoFilm');
export const getFavoriteFilms = createAction('film/getFavoriteFilms');
export const getComments = createAction(
  'film/getComments',
  (value) => ({payload: value,})
);
export const getFilm = createAction(
  'film/getFilm',
  (value) => ({payload: value,})
);
