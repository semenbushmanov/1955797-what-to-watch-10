import { Films } from '../../types/film';
import { useAppSelector, useAppDispatch } from '../../hooks/index';
import { changeGenre } from '../../store/action';

type GenreListProps = {
  films: Films;
}

function GenreList({films}: GenreListProps): JSX.Element {
  const { currentGenre } = useAppSelector((state) => state);
  const genreListSet = new Set(films.map((film) => film.genre));
  const genreList = [...genreListSet];
  genreList.unshift('All genres');
  const dispatch = useAppDispatch();

  const handleGenreChange = (genre: string) => {
    dispatch(changeGenre(genre));
  };

  return (
    <ul className="catalog__genres-list">
      {genreList.map((genre) => (
        <li
          key={genre}
          className={genre === currentGenre ? 'catalog__genres-item catalog__genres-item--active' : 'catalog__genres-item'}
          onClick={() => handleGenreChange(genre)}
        >
          <a href="#todo" className="catalog__genres-link">{genre}</a>
        </li>
      ))}
    </ul>
  );
}

export default GenreList;
