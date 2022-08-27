import PageNotFound from '../page-not-found/page-not-found';
import LoadingScreen from '../loading-screen/loading-screen';
import { useParams, useNavigate } from 'react-router-dom';
import { useFetchFilm } from '../../hooks/api-hooks/use-fetch-film';
import { RequestStatus } from '../../const';

function Player(): JSX.Element {
  const navigate = useNavigate();
  const { id } = useParams();
  const [film, status] = useFetchFilm(id);

  if (status === RequestStatus.Loading) {
    return (
      <LoadingScreen />
    );
  }

  if (!film || !id) {
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
