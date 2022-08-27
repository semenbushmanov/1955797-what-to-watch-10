import FilmCardList from '../../components/film-card-list/film-card-list';
import Logo from '../../components/logo/logo';
import Copyright from '../../components/copyright/copyright';
import UserBlock from '../../components/user-block/user-block';
import GenreList from '../../components/genre-list/genre-list';
import ShowMoreButton from '../../components/show-more-button/show-more-button';
import { useAppSelector, useAppDispatch } from '../../hooks/index';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FILMS_RENDERING_STEP, ALL_GENRES, AuthorizationStatus, AppRoute, FavoriteStatus } from '../../const';
import { getPromoFilm, getFilms, getFavoriteFilms, getFilmUpdatingStatus } from '../../store/films-data/selectors';
import { fetchFavoriteFilmsAction, updateFilmFavoriteStatus } from '../../store/api-actions';
import { getAuthorizationStatus } from '../../store/user-authorization/selectors';

function Main(): JSX.Element {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const promoFilm = useAppSelector(getPromoFilm);
  const films = useAppSelector(getFilms);
  const favoriteFilms = useAppSelector(getFavoriteFilms);
  const favoriteFilmsCount = favoriteFilms.length;
  const isFilmBeingUpdated = useAppSelector(getFilmUpdatingStatus);

  useEffect(() => {
    if (authorizationStatus === AuthorizationStatus.Auth) {
      dispatch(fetchFavoriteFilmsAction());
    }
  }, [authorizationStatus, dispatch]);

  const [ renderedFilmsCount, setRenderedFilmsCount ] = useState(FILMS_RENDERING_STEP);
  const [ currentGenre, setCurrentGenre ] = useState(ALL_GENRES);

  let filteredFilms = films;

  if (currentGenre !== ALL_GENRES) {
    filteredFilms = films.filter((film) => film.genre === currentGenre);
  }

  const filmsToRender = filteredFilms.slice(0, renderedFilmsCount);

  const handleShowMoreButtonClick = () => {
    setRenderedFilmsCount(renderedFilmsCount + FILMS_RENDERING_STEP);
  };

  const handlePlayButtonClick = () => {
    navigate(`/player/${promoFilm.id}`);
  };

  const changeGenre = (genre: string) => {
    setCurrentGenre(genre);
    setRenderedFilmsCount(FILMS_RENDERING_STEP);
  };

  const handleAddToFavoritesButtonClick = () => {
    if (authorizationStatus !== AuthorizationStatus.Auth) {
      navigate(AppRoute.SignIn);
      return;
    }

    if (!isFilmBeingUpdated) {
      if (promoFilm.isFavorite) {
        dispatch(updateFilmFavoriteStatus({
          filmId: promoFilm.id.toString(),
          status: FavoriteStatus.Delete,
        }));
      } else {
        dispatch(updateFilmFavoriteStatus({
          filmId: promoFilm.id.toString(),
          status: FavoriteStatus.Add,
        }));
      }
    }
  };

  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img src={promoFilm.backgroundImage} alt={promoFilm.name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header film-card__head">
          <Logo />

          <UserBlock />
        </header>

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src={promoFilm.posterImage} alt={`${promoFilm.name} poster`} width="218" height="327" />
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{promoFilm.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{promoFilm.genre}</span>
                <span className="film-card__year">{promoFilm.released}</span>
              </p>

              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button" onClick={handlePlayButtonClick}>
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list film-card__button" type="button" onClick={handleAddToFavoritesButtonClick}>
                  {promoFilm.isFavorite && authorizationStatus === AuthorizationStatus.Auth ?
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
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <GenreList films={films} currentGenre={currentGenre} changeGenre={changeGenre}/>

          <FilmCardList films={filmsToRender}/>

          {filteredFilms.length > renderedFilmsCount && <ShowMoreButton onButtonClick={handleShowMoreButtonClick}/>}
        </section>

        <footer className="page-footer">
          <Logo logoStyle='light'/>

          <Copyright />
        </footer>
      </div>
    </>
  );
}

export default Main;
