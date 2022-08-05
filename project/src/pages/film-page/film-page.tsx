import Logo from '../../components/logo/logo';
import Copyright from '../../components/copyright/copyright';
import UserBlock from '../../components/user-block/user-block';
import PageNotFound from '../page-not-found/page-not-found';
import Tabs from '../../components/tabs/tabs';
import MoreLikeThis from '../../components/more-like-this/more-like-this';
import { Films, Comments } from '../../types/film';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

type FilmPageProps = {
  films: Films;
  comments: Comments;
};

function FilmPage({films, comments}: FilmPageProps): JSX.Element {
  const { id } = useParams();
  const film = films.find((item) => item.id.toString() === id);

  if (!film) {
    return <PageNotFound />;
  }

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
                <Link to={`/films/${film.id}/review`} className="btn film-card__button">Add review</Link>
              </div>
            </div>
          </div>
        </div>

        <Tabs film={film} comments={comments}/>
      </section>

      <div className="page-content">
        <MoreLikeThis films={films} genre={film.genre}/>

        <footer className="page-footer">
          <Logo logoStyle='light'/>

          <Copyright />
        </footer>
      </div>
    </>
  );
}

export default FilmPage;
