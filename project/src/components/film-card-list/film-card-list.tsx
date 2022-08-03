import FilmCard from '../film-card/film-card';
import { Films } from '../../types/film';

type FilmCardListProps = {
  films: Films;
};

function FilmCardList(props: FilmCardListProps): JSX.Element {
  const { films } = props;

  return (
    <div className="catalog__films-list">
      {films.map((film) => (
        <FilmCard
          key={film.id}
          id={film.id}
          name={film.name}
          previewImage={film.previewImage}
          videoSrc={film.previewVideoLink}
        />
      ))}
    </div>
  );
}

export default FilmCardList;
