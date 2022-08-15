import { createReducer } from '@reduxjs/toolkit';
import { getFilms, getPromoFilm, changeGenre, getFilm, getFavoriteFilms, getComments, setError, setDataLoadingStatus } from './action';
import { films, promoFilm } from '../mocks/films';
import { comments } from '../mocks/comments';
import { Film, Films, Comments } from '../types/film';

type InitialState = {
  currentGenre: string;
  films: Films;
  promoFilm: Film;
  favoriteFilms: Films;
  film: Film;
  comments: Comments;
  isDataLoading: boolean;
  error: string | null;
}

const initialState: InitialState = {
  currentGenre: 'All genres',
  films: [],
  promoFilm,
  favoriteFilms: films,
  film: films[3],
  comments,
  isDataLoading: false,
  error: null,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.currentGenre = action.payload;
    })
    .addCase(getFilms, (state, action) => {
      state.films = action.payload;
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
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    })
    .addCase(setDataLoadingStatus, (state, action) => {
      state.isDataLoading = action.payload;
    });
});
