import Logo from '../../components/logo/logo';
import UserBlock from '../../components/user-block/user-block';
import Copyright from '../../components/copyright/copyright';
import FilmCardList from '../../components/film-card-list/film-card-list';
import LoadingScreen from '../loading-screen/loading-screen';
import { useAppSelector, useAppDispatch } from '../../hooks/index';
import { fetchFavoriteFilmsAction } from '../../store/api-actions';
import { useEffect } from 'react';
import { getFavoriteFilms, getFavoriteFilmsLoadingStatus } from '../../store/films-data/selectors';

function MyList(): JSX.Element {
  const dispatch = useAppDispatch();
  const favoriteFilms = useAppSelector(getFavoriteFilms);
  const areFavoriteFilmsLoading = useAppSelector(getFavoriteFilmsLoadingStatus);

  useEffect(() => {
    dispatch(fetchFavoriteFilmsAction());
  }, [dispatch]);

  if (areFavoriteFilmsLoading) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo />

        <h1 className="page-title user-page__title">My list <span className="user-page__film-count">{favoriteFilms.length}</span></h1>
        <UserBlock />
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <FilmCardList films={favoriteFilms}/>
      </section>

      <footer className="page-footer">
        <Logo logoStyle='light'/>

        <Copyright />
      </footer>
    </div>
  );
}

export default MyList;
