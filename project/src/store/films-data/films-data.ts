import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { FilmsData } from '../../types/state';
import { Film } from '../../types/film';
import { fetchFilmsAction, fetchPromoFilmAction, fetchFilmAction, fetchSimilarFilmsAction, fetchFilmCommentsAction, fetchFavoriteFilmsAction } from '../api-actions';

const initialState: FilmsData = {
  films: [],
  promoFilm: {} as Film,
  film: undefined,
  similarFilms: [],
  comments: [],
  favoriteFilms: [],
  isDataLoading:false,
  isFilmLoading: false,
  areFavoriteFilmsLoading: false,
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
      .addCase(fetchPromoFilmAction.fulfilled, (state, action) => {
        state.promoFilm = action.payload;
      })
      .addCase(fetchFilmAction.pending, (state) => {
        state.isFilmLoading = true;
      })
      .addCase(fetchFilmAction.fulfilled, (state, action) => {
        state.film = action.payload;
        state.isFilmLoading = false;
      })
      .addCase(fetchFilmAction.rejected, (state) => {
        state.isFilmLoading = false;
        state.film = undefined;
      })
      .addCase(fetchSimilarFilmsAction.fulfilled, (state, action) => {
        state.similarFilms = action.payload;
      })
      .addCase(fetchSimilarFilmsAction.rejected, (state) => {
        state.similarFilms = [];
      })
      .addCase(fetchFilmCommentsAction.fulfilled, (state, action) => {
        state.comments = action.payload;
      })
      .addCase(fetchFilmCommentsAction.rejected, (state) => {
        state.comments = [];
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
      });
  }
});
