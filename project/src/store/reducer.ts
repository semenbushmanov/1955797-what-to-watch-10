import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from '@reduxjs/toolkit';
import { changeGenre, getFavoriteFilms, getComments } from './action';
import { films } from '../mocks/films';
import { comments } from '../mocks/comments';
import { Films, Comments } from '../types/film';
import { NameSpace } from '../const';
import { filmsData } from './films-data/films-data';
import { userAuthorization } from './user-authorization/user-authorization';

type InitialState = {
  currentGenre: string;
  favoriteFilms: Films;
  comments: Comments;
}

const initialState: InitialState = {
  currentGenre: 'All genres',
  favoriteFilms: films,
  comments,
};

const commonReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.currentGenre = action.payload;
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
