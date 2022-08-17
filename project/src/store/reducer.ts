import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from '@reduxjs/toolkit';
import { getPromoFilm, changeGenre, getFilm, getFavoriteFilms, getComments, setError } from './action';
import { films, promoFilm } from '../mocks/films';
import { comments } from '../mocks/comments';
import { Film, Films, Comments } from '../types/film';
import { NameSpace } from '../const';
import { filmsData } from './films-data/films-data';

type InitialState = {
  currentGenre: string;
  promoFilm: Film;
  favoriteFilms: Films;
  film: Film;
  comments: Comments;
  error: string | null;
}

const initialState: InitialState = {
  currentGenre: 'All genres',
  promoFilm,
  favoriteFilms: films,
  film: films[3],
  comments,
  error: null,
};

const commonReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.currentGenre = action.payload;
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
    });
});

export const reducer = combineReducers({
  [NameSpace.Data]: filmsData.reducer,
  commonReducer,
});
