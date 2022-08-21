import { Comments } from '../../types/film';
import FilmReview from '../film-review/film-review';

type FilmReviewsProps = {
  comments: Comments;
}

const NUMBER_OF_COLUMNS = 2;

function FilmReviews({comments}: FilmReviewsProps): JSX.Element {
  const commentsNumberInColumn = Math.ceil(comments.length / NUMBER_OF_COLUMNS);

  const firstColumnComments = [...comments].slice(0, commentsNumberInColumn);
  const secondColumnComments = [...comments].slice(commentsNumberInColumn, comments.length);

  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {firstColumnComments.map((comment) => (<FilmReview key={comment.id} comment={comment}/>))}
      </div>
      <div className="film-card__reviews-col">
        {secondColumnComments.map((comment) => (<FilmReview key={comment.id} comment={comment}/>))}
      </div>
    </div>
  );
}

export default FilmReviews;
