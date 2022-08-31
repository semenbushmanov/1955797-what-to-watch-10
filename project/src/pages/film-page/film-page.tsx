import Logo from '../../components/logo/logo';
import Copyright from '../../components/copyright/copyright';
import UserBlock from '../../components/user-block/user-block';
import PageNotFound from '../page-not-found/page-not-found';
import Tabs from '../../components/tabs/tabs';
import MoreLikeThis from '../../components/more-like-this/more-like-this';
import LoadingScreen from '../loading-screen/loading-screen';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../hooks/index';
import { updateFilmFavoriteStatus } from '../../store/api-actions';
import { AuthorizationStatus, AppRoute, RequestStatus, FavoriteStatus } from '../../const';
import { getFilmUpdatingStatus, getFavoriteFilms } from '../../store/films-data/selectors';
import { getAuthorizationStatus } from '../../store/user-authorization/selectors';
import { useFetchFilm } from '../../hooks/api-hooks/use-fetch-film';
import { useFetchFilmComments } from '../../hooks/api-hooks/use-fetch-comments';
import { useFetchSimilarFilms } from '../../hooks/api-hooks/use-fetch-similar-films';

function FilmPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const isFilmBeingUpdated = useAppSelector(getFilmUpdatingStatus);
  const favoriteFilms = useAppSelector(getFavoriteFilms);
  const favoriteFilmsCount = favoriteFilms.length;
  const [film, status] = useFetchFilm(id);
  const [comments] = useFetchFilmComments(id);
  const [similarFilms] = useFetchSimilarFilms(id);

  if (!id || status === RequestStatus.Error) {
    return <PageNotFound />;
  }

  if (!film || status === RequestStatus.Loading) {
    return (
      <LoadingScreen />
    );
  }

  const handlePlayButtonClick = () => {
    navigate(`/player/${id}`);
  };

  const handleAddToFavoritesButtonClick = () => {
    if (authorizationStatus !== AuthorizationStatus.Auth) {
      navigate(AppRoute.SignIn);
      return;
    }

    if (!isFilmBeingUpdated) {
      if (film.isFavorite) {
        dispatch(updateFilmFavoriteStatus({
          filmId: id,
          status: FavoriteStatus.Delete,
        }));
      } else {
        dispatch(updateFilmFavoriteStatus({
          filmId: id,
          status: FavoriteStatus.Add,
        }));
      }
    }
  };

  return (
    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={film.backgroundImage} alt={film.name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header film-card__head">
            <Logo />

            <UserBlock />
          </header>

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{film.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{film.genre}</span>
                <span className="film-card__year">{film.released}</span>
              </p>

              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button" onClick={handlePlayButtonClick}>
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list film-card__button" type="button" onClick={handleAddToFavoritesButtonClick}>
                  {film.isFavorite && authorizationStatus === AuthorizationStatus.Auth ?
                    <svg viewBox="0 0 18 14" width="18" height="14">
                      <use xlinkHref="#in-list"></use>
                    </svg>
                    :
                    <svg viewBox="0 0 19 20" width="19" height="20">
                      <use xlinkHref="#add"></use>
                    </svg>}
                  <span>My list</span>
                  <span className="film-card__count">{favoriteFilmsCount}</span>
                </button>
                {authorizationStatus === AuthorizationStatus.Auth && <Link to={`/films/${film.id}/review`} className="btn film-card__button">Add review</Link>}
              </div>
            </div>
          </div>
        </div>

        <Tabs film={film} comments={comments}/>
      </section>

      <div className="page-content">
        <MoreLikeThis films={similarFilms}/>

        <footer className="page-footer">
          <Logo logoStyle='light'/>

          <Copyright />
        </footer>
      </div>
    </>
  );
}

export default FilmPage;
