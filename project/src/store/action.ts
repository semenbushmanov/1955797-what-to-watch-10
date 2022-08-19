import { createAction } from '@reduxjs/toolkit';
import { AppRoute } from '../const';

export const changeGenre = createAction(
  'film/changeGenre',
  (value) => ({payload: value,})
);
export const getFavoriteFilms = createAction('data/getFavoriteFilms');
export const getComments = createAction(
  'data/getComments',
  (value) => ({payload: value,})
);
export const getFilm = createAction(
  'data/getFilm',
  (value) => ({payload: value,})
);
export const redirectToRoute = createAction<AppRoute>('app/redirectToRoute');
