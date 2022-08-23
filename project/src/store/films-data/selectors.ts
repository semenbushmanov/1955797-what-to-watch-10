import { NameSpace } from '../../const';
import { State } from '../../types/state';
import { Film, Films, Comments } from '../../types/film';

export const getFilms = (state: State): Films => state[NameSpace.Data].films;
export const getPromoFilm = (state: State): Film => state[NameSpace.Data].promoFilm;
export const getFilm = (state: State): Film | undefined => state[NameSpace.Data].film;
export const getSimilarFilms = (state: State): Films => state[NameSpace.Data].similarFilms;
export const getComments = (state: State): Comments => state[NameSpace.Data].comments;
export const getFavoriteFilms = (state: State): Films => state[NameSpace.Data].favoriteFilms;
export const getLoadingStatus = (state: State): boolean => state[NameSpace.Data].isDataLoading;
export const getFilmLoadingStatus = (state: State): boolean => state[NameSpace.Data].isFilmLoading;
export const getFavoriteFilmsLoadingStatus = (state: State): boolean => state[NameSpace.Data].areFavoriteFilmsLoading;
export const getCommentStatus = (state: State): boolean => state[NameSpace.Data].isCommentBeingPosted;
