import { useState } from 'react';
import { Link } from 'react-router-dom';
import Videoplayer from '../video-player/video-player';
import { START_VIDEO_TIMEOUT } from '../../const';

type FilmCardProps = {
  id: number;
  name: string;
  previewImage: string;
  videoSrc: string;
};

function FilmCard(props: FilmCardProps): JSX.Element {
  const { id, name, previewImage, videoSrc } = props;
  const [ isPlaying, setPlaying ] = useState(false);
  let timer: NodeJS.Timeout;

  const handleMouseEnter = () => {
    timer = setTimeout(() => setPlaying(true), START_VIDEO_TIMEOUT);
  };

  const handleMouseLeave = () => {
    clearTimeout(timer);
    if (isPlaying) {
      setPlaying(false);
    }
  };

  return (
    <article
      className="small-film-card catalog__films-card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="small-film-card__image">
        <Videoplayer src={videoSrc} poster={previewImage} isPlaying={isPlaying}/>
      </div>
      <h3 className="small-film-card__title">
        <Link to={`/films/${id}`} className="small-film-card__link">{name}</Link>
      </h3>
    </article>
  );
}

export default FilmCard;
