import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import Main from '../../pages/main/main';
import SignIn from '../../pages/sign-in/sign-in';
import MyList from '../../pages/my-list/my-list';
import FilmPage from '../../pages/film-page/film-page';
import AddReview from '../../pages/add-review/add-review';
import Player from '../../pages/player/player';
import PageNotFound from '../../pages/page-not-found/page-not-found';
import PrivateRoute from '../private-route/private-route';
import { Film, Films, Reviews } from '../../types/film';

type AppProps = {
  filmsNumberToRender: number;
  promoFilm: {
    name: string;
    genre: string;
    year: number;
  };
  films: Films;
  reviews: Reviews;
}

function App({filmsNumberToRender, promoFilm, films, reviews}: AppProps): JSX.Element {
  const [firstFilm] = films;

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={
            <Main
              filmsNumberToRender={filmsNumberToRender}
              promoFilm={promoFilm}
              films={films}
            />
          }
        />
        <Route
          path={AppRoute.SignIn}
          element={<SignIn />}
        />
        <Route
          path={AppRoute.MyList}
          element={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.NoAuth}
            >
              <MyList />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Film}
          element={
            <FilmPage
              film={firstFilm as Film}
            />
          }
        />
        <Route
          path={AppRoute.AddReview}
          element={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.NoAuth}
            >
              <AddReview />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Player}
          element={<Player />}
        />
        <Route
          path='*'
          element={<PageNotFound />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
