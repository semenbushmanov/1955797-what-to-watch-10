import { createAction } from '@reduxjs/toolkit';
import { Films } from '../types/film';
import { AppRoute } from '../const';

export const changeGenre = createAction(
  'film/changeGenre',
  (value) => ({payload: value,})
);
export const getFilms = createAction<Films>('data/getFilms');
export const getPromoFilm = createAction('data/getPromoFilm');
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
