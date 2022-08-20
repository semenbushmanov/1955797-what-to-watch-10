import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from '@reduxjs/toolkit';
import { changeGenre, getFavoriteFilms } from './action';
import { films } from '../mocks/films';
import { Films } from '../types/film';
import { NameSpace } from '../const';
import { filmsData } from './films-data/films-data';
import { userAuthorization } from './user-authorization/user-authorization';

type InitialState = {
  currentGenre: string;
  favoriteFilms: Films;
}

const initialState: InitialState = {
  currentGenre: 'All genres',
  favoriteFilms: films,
};

const commonReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.currentGenre = action.payload;
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
