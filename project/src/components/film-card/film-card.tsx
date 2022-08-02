import { Link } from 'react-router-dom';
import Videoplayer from '../video-player/video-player';

type FilmCardProps = {
  id: number;
  name: string;
  previewImage: string;
  onMouseEnter: (filmId: number) => void;
  onMouseLeave: () => void;
  isPlaying: boolean;
  videoSrc: string;
};

function FilmCard(props: FilmCardProps): JSX.Element {
  const { id, name, previewImage, isPlaying, videoSrc } = props;
  const { onMouseEnter, onMouseLeave } = props;

  let timer: NodeJS.Timeout;

  const handleMouseEnter = () => {
    timer = setTimeout(() => onMouseEnter(id), 1000);
  };

  const handleMouseLeave = () => {
    clearTimeout(timer);
    onMouseLeave();
  };

  return (
    <article
      className="small-film-card catalog__films-card"
      onMouseEnter={() => handleMouseEnter()}
      onMouseLeave={() => handleMouseLeave()}
    >
      <div className="small-film-card__image">
        <Videoplayer src={videoSrc} poster={previewImage} isPlaying={isPlaying}/>
      </div>
      <h3 className="small-film-card__title">
        <Link to={`films/${id}`} className="small-film-card__link">{name}</Link>
      </h3>
    </article>
  );
}

export default FilmCard;
