import { Films } from '../../types/film';
import { Link } from 'react-router-dom';
import { ALL_GENRES, GENRES_MAX_NUMBER } from '../../const';
import { memo } from 'react';

type GenreListProps = {
  films: Films,
  currentGenre: string,
  changeGenre: (genre: string) => void,
}

function GenreList({films, currentGenre, changeGenre}: GenreListProps): JSX.Element {
  const genreListSet = new Set(films.map((film) => film.genre));
  const genreList = [...genreListSet].slice(0, GENRES_MAX_NUMBER);
  genreList.unshift(ALL_GENRES);


  return (
    <ul className="catalog__genres-list">
      {genreList.map((genre) => (
        <li
          key={genre}
          className={genre === currentGenre ? 'catalog__genres-item catalog__genres-item--active' : 'catalog__genres-item'}
          onClick={() => changeGenre(genre)}
        >
          <Link to="" className="catalog__genres-link">{genre}</Link>
        </li>
      ))}
    </ul>
  );
}

export default memo(GenreList);
