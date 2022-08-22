import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from '@reduxjs/toolkit';
import { changeGenre } from './action';
import { NameSpace } from '../const';
import { filmsData } from './films-data/films-data';
import { userAuthorization } from './user-authorization/user-authorization';

type InitialState = {
  currentGenre: string;
}

const initialState: InitialState = {
  currentGenre: 'All genres',
};

const commonReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.currentGenre = action.payload;
    });
});

export const reducer = combineReducers({
  [NameSpace.Data]: filmsData.reducer,
  [NameSpace.User]: userAuthorization.reducer,
  commonReducer,
});
