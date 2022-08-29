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

export enum APIRoute {
  Films = '/films',
  Login = '/login',
  Logout = '/logout',
  Promo = '/promo',
  NotFound = '/404',
  Comments = '/comments',
  Favorite = '/favorite',
}

export enum NameSpace {
  Data = 'DATA',
  User = 'USER',
}

export enum ReviewTextLength {
  Min = 50,
  Max = 400,
}

export enum FavoriteStatus {
  Add = 1,
  Delete = 0,
}

export enum RequestStatus {
  NotStarted,
  Loading,
  Success,
  Error,
}

export const FILMS_RENDERING_STEP = 8;
export const ALL_GENRES = 'All genres';
export const START_VIDEO_TIMEOUT = 1000;
export const MINS_IN_HOUR = 60;
export const GENRES_MAX_NUMBER = 9;
export const SIMILAR_FILMS_MAX_NUMBER = 4;
