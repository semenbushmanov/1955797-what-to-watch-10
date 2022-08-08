import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { films, promoFilm } from './mocks/films';
import { comments } from './mocks/comments';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App
      promoFilm = {promoFilm}
      films = {films}
      comments = {comments}
    />
  </React.StrictMode>,
);
