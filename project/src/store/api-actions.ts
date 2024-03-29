import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state';
import { Film, Films, UserComment, Comments } from '../types/film';
import { redirectToRoute } from './action';
import { saveToken, dropToken } from '../services/token';
import { APIRoute, AppRoute, FavoriteStatus } from '../const';
import { AuthData } from '../types/auth-data.js';
import { UserData } from '../types/user-data.js';

export const fetchFilmsAction = createAsyncThunk<Films, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchFilms',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<Films>(APIRoute.Films);
    return data;
  },
);

export const fetchPromoFilmAction = createAsyncThunk<Film, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchPromoFilm',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<Film>(APIRoute.Promo);
    return data;
  },
);

export const fetchFavoriteFilmsAction = createAsyncThunk<Films, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchFavoriteFilms',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<Films>(APIRoute.Favorite);
    return data;
  },
);

export const postCommentAction = createAsyncThunk<Comments, {filmId: string, comment: UserComment}, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/postComment',
  async ({filmId, comment}, {dispatch, extra: api}) => {
    const {data} = await api.post<Comments>(`${APIRoute.Comments}/${filmId}`, comment);
    dispatch(redirectToRoute(`/films/${filmId}/reviews`));
    return data;
  },
);

export const updateFilmFavoriteStatus = createAsyncThunk<Film, {filmId: string, status: FavoriteStatus}, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/addFilmToFavorites',
  async ({filmId, status}, {dispatch, extra: api}) => {
    const {data} = await api.post<Film>(`${APIRoute.Favorite}/${filmId}/${status}`);
    dispatch(redirectToRoute(AppRoute.MyList));
    return data;
  },
);

export const checkAuthAction = createAsyncThunk<UserData, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get(APIRoute.Login);
    return data;
  },
);

export const loginAction = createAsyncThunk<UserData, AuthData, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/login',
  async ({email, password}, {dispatch, extra: api}) => {
    const {data} = await api.post<UserData>(APIRoute.Login, {email, password});
    saveToken(data.token);
    dispatch(redirectToRoute(AppRoute.Main));
    return data;
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(redirectToRoute(AppRoute.Main));
  },
);
