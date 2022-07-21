import FilmCard from '../film-card/film-card';
import { Films } from '../../types/film';

type FilmCardListProps = {
  films: Films;
};

function FilmCardList({films}: FilmCardListProps): JSX.Element {
  return (
    <div className="catalog__films-list">
      {films.map((film) => FilmCard(film))}
    </div>
  );
}

export default FilmCardList;
