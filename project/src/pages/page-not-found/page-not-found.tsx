import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

function PageNotFound(): JSX.Element {
  return (
    <div>
      <h1>404</h1>
      <h2>Page not found</h2>
      <Link to={AppRoute.Main}>Back to the homepage</Link>
    </div>
  );
}

export default PageNotFound;
