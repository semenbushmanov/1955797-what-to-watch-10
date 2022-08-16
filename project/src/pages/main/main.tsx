import FilmCardList from '../../components/film-card-list/film-card-list';
import Logo from '../../components/logo/logo';
import Copyright from '../../components/copyright/copyright';
import UserBlock from '../../components/user-block/user-block';
import GenreList from '../../components/genre-list/genre-list';
import ShowMoreButton from '../../components/show-more-button/show-more-button';
import { useAppSelector } from '../../hooks/index';
import { useState } from 'react';
import { FILMS_RENDERING_STEP, ALL_GENRES } from '../../const';

function Main(): JSX.Element {
  const { promoFilm, currentGenre } = useAppSelector((state) => state.commonReducer);
  const films = useAppSelector((state) => state.DATA.films);
  let filteredFilms = films;
  const [ renderedFilmsCount, setRenderedFilmsCount ] = useState(FILMS_RENDERING_STEP);

  if (currentGenre !== ALL_GENRES) {
    filteredFilms = [...films].filter((film) => film.genre === currentGenre);
  }

  const handleShowMoreButtonClick = () => {
    setRenderedFilmsCount(renderedFilmsCount + FILMS_RENDERING_STEP);
  };

  const resetFilmsCount = () => {
    setRenderedFilmsCount(FILMS_RENDERING_STEP);
  };

  const filmsToRender = [...filteredFilms].slice(0, renderedFilmsCount);

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
                <button className="btn btn--play film-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                  <span className="film-card__count">9</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <GenreList films={films} resetFilmsCount={resetFilmsCount}/>

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
