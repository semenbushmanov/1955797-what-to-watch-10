import { store } from '../store/index';
import { Film, Films } from './film';
import { AuthorizationStatus } from '../const';
import { UserData } from './user-data';

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type FilmsData = {
  films: Films,
  isDataLoading: boolean,
  isFilmLoading: boolean,
  promoFilm: Film,
  film: Film | undefined,
  similarFilms: Films,
};

export type UserAuthorization = {
  authorizationStatus: AuthorizationStatus,
  userData: UserData | undefined,
};
