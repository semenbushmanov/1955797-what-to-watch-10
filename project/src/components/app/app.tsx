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
import { Film, Films, Comments } from '../../types/film';

type AppProps = {
  promoFilm: Film;
  films: Films;
  comments: Comments;
}

function App({promoFilm, films, comments}: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={
            <Main
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
              authorizationStatus={AuthorizationStatus.Auth}
            >
              <MyList films={films}/>
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Film}
          element={
            <FilmPage films={films} comments={comments}/>
          }
        >
          <Route
            path=':tab'
            element={
              <FilmPage films={films} comments={comments}/>
            }
          />
        </Route>
        <Route
          path={AppRoute.AddReview}
          element={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.Auth}
            >
              <AddReview name={films[0].name} backgroundImage={films[0].backgroundImage} previewImage={films[0].previewImage}/>
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Player}
          element={<Player name={films[0].name} posterImage={films[0].posterImage} videoLink={films[0].videoLink}/>}
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
