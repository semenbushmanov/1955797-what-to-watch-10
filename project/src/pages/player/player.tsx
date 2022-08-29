import PageNotFound from '../page-not-found/page-not-found';
import LoadingScreen from '../loading-screen/loading-screen';
import { useParams, useNavigate } from 'react-router-dom';
import { useRef, useEffect, useState } from 'react';
import { useFetchFilm } from '../../hooks/api-hooks/use-fetch-film';
import { RequestStatus } from '../../const';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
dayjs.extend(duration);

const SECONDS_IN_HOUR = 3600;

function Player(): JSX.Element {
  const navigate = useNavigate();
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const { id } = useParams();
  const [film, status] = useFetchFilm(id);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [videoDuration, setDuration] = useState(0);
  const video = videoRef.current;

  useEffect(() => {
    if (video === null) {
      return;
    }

    if (isPlaying) {
      video.play();
      return;
    }

    video.pause();
  }, [isPlaying, video]);

  if (status === RequestStatus.Loading) {
    return (
      <LoadingScreen />
    );
  }

  if (!film || !id) {
    return <PageNotFound />;
  }

  const handleExitButtonClick = () => navigate(`/films/${id}`);
  const handlePlayButtonClick = () => setIsPlaying(!isPlaying);
  const handleFullScreenButtonClick = () => video?.requestFullscreen();

  const startPlaying = () => {
    if (video) {
      setDuration(video.duration);
      setIsPlaying(true);
    }
  };

  const handleTimeUpdate = () => {
    if (video?.currentTime) {
      setCurrentTime(video.currentTime);
    }
  };

  const handlePlayEnd = () => setIsPlaying(false);

  const getProgress = () => videoDuration === 0 ? 0 : Math.floor(currentTime / videoDuration * 100);
  const progress = getProgress();
  const timeLeft = Math.floor(videoDuration - currentTime);
  const { name, posterImage, videoLink } = film;

  return (
    <div className="player">
      <video
        src={videoLink}
        className="player__video"
        poster={posterImage}
        ref={videoRef}
        onLoadedMetadata={startPlaying}
        onTimeUpdate={handleTimeUpdate}
        onEnded={handlePlayEnd}
      >
      </video>

      <button type="button" className="player__exit" onClick={handleExitButtonClick}>Exit</button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value={progress} max="100"></progress>
            <div className="player__toggler" style={{left: `${progress}%`}}>Toggler</div>
          </div>
          <div className="player__time-value">
            {`-${timeLeft < SECONDS_IN_HOUR ?
              dayjs.duration(timeLeft, 's').format('mm:ss')
              :
              dayjs.duration(timeLeft, 's').format('HH:mm:ss')}`}
          </div>
        </div>

        <div className="player__controls-row">
          {isPlaying ?
            <button type="button" className="player__play" onClick={handlePlayButtonClick}>
              <svg viewBox="0 0 14 21" width="14" height="21">
                <use xlinkHref="#pause"></use>
              </svg>
              <span>Pause</span>
            </button>
            :
            <button type="button" className="player__play" onClick={handlePlayButtonClick}>
              <svg viewBox="0 0 19 19" width="19" height="19">
                <use xlinkHref="#play-s"></use>
              </svg>
              <span>Play</span>
            </button>}
          <div className="player__name">{name}</div>

          <button type="button" className="player__full-screen" onClick={handleFullScreenButtonClick}>
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Player;
