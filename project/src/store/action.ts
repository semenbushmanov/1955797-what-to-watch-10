import { createAction } from '@reduxjs/toolkit';
import { AppRoute } from '../const';

export const changeGenre = createAction(
  'film/changeGenre',
  (value) => ({payload: value,})
);
export const redirectToRoute = createAction<AppRoute>('app/redirectToRoute');
