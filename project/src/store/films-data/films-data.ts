import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { FilmsData } from '../../types/state';
import { Film } from '../../types/film';
import {
  fetchFilmsAction,
  fetchPromoFilmAction,
  fetchFavoriteFilmsAction,
  postCommentAction,
  updateFilmFavoriteStatus
} from '../api-actions';

const initialState: FilmsData = {
  films: [],
  promoFilm: {} as Film,
  favoriteFilms: [],
  isDataLoading:false,
  areFavoriteFilmsLoading: false,
  isCommentBeingPosted: false,
  isFilmBeingUpdated: false,
};

export const filmsData = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchFilmsAction.pending, (state) => {
        state.isDataLoading = true;
      })
      .addCase(fetchFilmsAction.fulfilled, (state, action) => {
        state.films = action.payload;
        state.isDataLoading = false;
      })
      .addCase(fetchFilmsAction.rejected, (state) => {
        state.isDataLoading = false;
      })
      .addCase(fetchPromoFilmAction.fulfilled, (state, action) => {
        state.promoFilm = action.payload;
      })
      .addCase(fetchFavoriteFilmsAction.pending, (state) => {
        state.areFavoriteFilmsLoading = true;
      })
      .addCase(fetchFavoriteFilmsAction.fulfilled, (state, action) => {
        state.favoriteFilms = action.payload;
        state.areFavoriteFilmsLoading = false;
      })
      .addCase(fetchFavoriteFilmsAction.rejected, (state) => {
        state.areFavoriteFilmsLoading = false;
        state.favoriteFilms = [];
      })
      .addCase(postCommentAction.pending, (state) => {
        state.isCommentBeingPosted = true;
      })
      .addCase(postCommentAction.fulfilled, (state, action) => {
        state.isCommentBeingPosted = false;
      })
      .addCase(postCommentAction.rejected, (state) => {
        state.isCommentBeingPosted = false;
      })
      .addCase(updateFilmFavoriteStatus.pending, (state) => {
        state.isFilmBeingUpdated = true;
      })
      .addCase(updateFilmFavoriteStatus.fulfilled, (state) => {
        state.isFilmBeingUpdated = false;
      })
      .addCase(updateFilmFavoriteStatus.rejected, (state) => {
        state.isFilmBeingUpdated = false;
      });
  }
});
