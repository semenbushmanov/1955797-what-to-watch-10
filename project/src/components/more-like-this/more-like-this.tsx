import FilmCardList from '../film-card-list/film-card-list';
import { Films } from '../../types/film';
import { SIMILAR_FILMS_MAX_NUMBER } from '../../const';

type MoreLikeThisProps = {
  films: Films;
}

function MoreLikeThis({films}: MoreLikeThisProps): JSX.Element {
  const similarFilms = films.slice(0, SIMILAR_FILMS_MAX_NUMBER);

  return (
    <section className="catalog catalog--like-this">
      <h2 className="catalog__title">More like this</h2>

      <FilmCardList films={similarFilms}/>
    </section>
  );
}

export default MoreLikeThis;
