import { Route, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppSelector } from '../../hooks';
import { getLoadingStatus } from '../../store/films-data/selectors';
import { getAuthorizationStatus } from '../../store/user-authorization/selectors';
import Main from '../../pages/main/main';
import SignIn from '../../pages/sign-in/sign-in';
import MyList from '../../pages/my-list/my-list';
import FilmPage from '../../pages/film-page/film-page';
import AddReview from '../../pages/add-review/add-review';
import Player from '../../pages/player/player';
import PageNotFound from '../../pages/page-not-found/page-not-found';
import PrivateRoute from '../private-route/private-route';
import LoadingScreen from '../../pages/loading-screen/loading-screen';
import HistoryRouter from '../history-route/history-route';
import browserHistory from '../../browser-history';

const isAuthChecked = (authorizationStatus: AuthorizationStatus): boolean =>
  authorizationStatus === AuthorizationStatus.Unknown;

function App(): JSX.Element {
  const isDataLoading = useAppSelector(getLoadingStatus);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  if (isDataLoading || isAuthChecked(authorizationStatus)) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={
            <Main />
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
              authorizationStatus={authorizationStatus}
            >
              <MyList />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Film}
          element={
            <FilmPage />
          }
        >
          <Route
            path=':tab'
            element={
              <FilmPage />
            }
          />
        </Route>
        <Route
          path={AppRoute.AddReview}
          element={
            <PrivateRoute
              authorizationStatus={authorizationStatus}
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
    </HistoryRouter>
  );
}

export default App;
