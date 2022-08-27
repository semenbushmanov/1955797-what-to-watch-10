import Logo from '../../components/logo/logo';
import UserBlock from '../../components/user-block/user-block';
import AddReviewForm from '../../components/add-review-form/add-review-form';
import PageNotFound from '../page-not-found/page-not-found';
import LoadingScreen from '../loading-screen/loading-screen';
import { useFetchFilm } from '../../hooks/api-hooks/use-fetch-film';
import { Link, useParams } from 'react-router-dom';
import { RequestStatus } from '../../const';

function AddReview(): JSX.Element {
  const { id } = useParams();
  const [film, status] = useFetchFilm(id);

  if (status === RequestStatus.Loading) {
    return <LoadingScreen />;
  }

  if (!film || !id) {
    return <PageNotFound />;
  }

  const {name, backgroundImage, previewImage} = film;

  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={backgroundImage} alt={name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <Logo />

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={`/films/${id}`} className="breadcrumbs__link">{name}</Link>
              </li>
              <li className="breadcrumbs__item">
                <Link to={`/films/${id}/review`} className="breadcrumbs__link">Add review</Link>
              </li>
            </ul>
          </nav>

          <UserBlock />
        </header>

        <div className="film-card__poster film-card__poster--small">
          <img src={previewImage} alt={name} width="218" height="327" />
        </div>
      </div>

      <AddReviewForm id={id}/>

    </section>
  );
}

export default AddReview;
