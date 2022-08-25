import PageNotFound from '../page-not-found/page-not-found';
import { useAppSelector, useAppDispatch } from '../../hooks/index';
import { fetchFilmAction } from '../../store/api-actions';
import { getFilm } from '../../store/films-data/selectors';
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function Player(): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const film = useAppSelector(getFilm);

  useEffect(() => {
    if (id) {
      dispatch(fetchFilmAction(id));
    }
  }, [id, dispatch]);

  if (!film) {
    return <PageNotFound />;
  }

  const { posterImage, videoLink } = film;

  const handleClick = () => {
    navigate(`/films/${id}`);
  };

  return (
    <div className="player">
      <video src={videoLink} className="player__video" poster={posterImage} controls autoPlay></video>

      <button type="button" className="player__exit" onClick={handleClick}>Exit</button>
    </div>
  );
}

export default Player;
