import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from '@reduxjs/toolkit';
import { changeGenre, getFilm, getFavoriteFilms, getComments } from './action';
import { films } from '../mocks/films';
import { comments } from '../mocks/comments';
import { Film, Films, Comments } from '../types/film';
import { NameSpace } from '../const';
import { filmsData } from './films-data/films-data';
import { userAuthorization } from './user-authorization/user-authorization';

type InitialState = {
  currentGenre: string;
  favoriteFilms: Films;
  film: Film;
  comments: Comments;
}

const initialState: InitialState = {
  currentGenre: 'All genres',
  favoriteFilms: films,
  film: films[3],
  comments,
};

const commonReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.currentGenre = action.payload;
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

export const reducer = combineReducers({
  [NameSpace.Data]: filmsData.reducer,
  [NameSpace.User]: userAuthorization.reducer,
  commonReducer,
});
