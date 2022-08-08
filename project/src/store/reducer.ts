import { createReducer } from '@reduxjs/toolkit';
import { getFilms, getPromoFilm, changeGenre, getFilm, getFavoriteFilms, getComments } from './action';
import { films, promoFilm } from '../mocks/films';
import { comments } from '../mocks/comments';
import { Film, Films, Comments } from '../types/film';

const initialState: {
  currentGenre: string;
  films: Films;
  promoFilm: Film;
  favoriteFilms: Films;
  film: Film;
  comments: Comments;
} = {
  currentGenre: 'All genres',
  films,
  promoFilm,
  favoriteFilms: films,
  film: films[3],
  comments,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.currentGenre = action.payload;
    })
    .addCase(getFilms, (state) => {
      state.films = films;
    })
    .addCase(getPromoFilm, (state) => {
      state.promoFilm = promoFilm;
    })
    .addCase(getFilm, (state, action) => {
      state.film = films[action.payload];
    })
    .addCase(getComments, (state) => {
      state.comments = comments;
    })
    .addCase(getFavoriteFilms, (state) => {
      state.favoriteFilms = films;
    });
});
