export enum AppRoute {
  Main = '/',
  SignIn = '/login',
  MyList = '/mylist',
  Film = '/films/:id',
  AddReview = '/films/:id/review',
  Player = '/player/:id',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const FILMS_RENDERING_STEP = 8;
export const ALL_GENRES = 'All genres';
export const START_VIDEO_TIMEOUT = 1000;
export const MINS_IN_HOUR = 60;
