import { NameSpace } from '../../const';
import { State } from '../../types/state';
import { Film, Films } from '../../types/film';

export const getFilms = (state: State): Films => state[NameSpace.Data].films;
export const getPromoFilm = (state: State): Film => state[NameSpace.Data].promoFilm;
export const getFavoriteFilms = (state: State): Films => state[NameSpace.Data].favoriteFilms;
export const getLoadingStatus = (state: State): boolean => state[NameSpace.Data].isDataLoading;
export const getFavoriteFilmsLoadingStatus = (state: State): boolean => state[NameSpace.Data].areFavoriteFilmsLoading;
export const getCommentStatus = (state: State): boolean => state[NameSpace.Data].isCommentBeingPosted;
export const getFilmUpdatingStatus = (state: State): boolean => state[NameSpace.Data].isFilmBeingUpdated;
