import { useState } from 'react';
import FilmCard from '../film-card/film-card';
import { Films } from '../../types/film';

type FilmCardListProps = {
  films: Films;
};

function FilmCardList(props: FilmCardListProps): JSX.Element {
  const { films } = props;
  const [ ActiveFilmCard, setActiveFilmCard ] = useState<number|undefined>();

  const onMouseEnter = (filmId: number) => {
    setActiveFilmCard(filmId);
  };

  const onMouseLeave = () => {
    setActiveFilmCard(undefined);
  };

  return (
    <div className="catalog__films-list">
      {films.map((film) => (
        <FilmCard
          key={film.id}
          id={film.id}
          name={film.name}
          previewImage={film.previewImage}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          isPlaying={film.id === ActiveFilmCard}
          videoSrc={film.previewVideoLink}
        />
      ))}
    </div>
  );
}

export default FilmCardList;
