import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { films } from './mocks/films';
import { reviews } from './mocks/reviews';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const Setting = {
  FILMS_NUMBER_TO_RENDER: 20,
};

const promoFilm = {
  name: 'The Grand Budapest Hotel',
  genre: 'Drama',
  year: 2014,
};

root.render(
  <React.StrictMode>
    <App
      filmsNumberToRender = {Setting.FILMS_NUMBER_TO_RENDER}
      promoFilm = {promoFilm}
      films = {films}
      reviews = {reviews}
    />
  </React.StrictMode>,
);
