import Main from '../../pages/main/main';

type AppProps = {
  filmsNumberToRender: number;
  promoFilm: {
    name: string;
    genre: string;
    year: number;
  }
}

function App({filmsNumberToRender, promoFilm}: AppProps): JSX.Element {
  return <Main filmsNumberToRender={filmsNumberToRender} promoFilm={promoFilm} />;
}

export default App;
