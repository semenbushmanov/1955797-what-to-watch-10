import { Film, Films } from '../types/film';

export const films: Films = [
  {
    id: 0,
    name: 'The Grand Budapest Hotel',
    posterImage: 'img/the-grand-budapest-hotel-poster.jpg',
    previewImage: 'img/bohemian-rhapsody.jpg',
    backgroundImage: 'img/bg-the-grand-budapest-hotel.jpg',
    backgroundColor: 'green',
    videoLink: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
    previewVideoLink: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
    description: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave\'s friend and protege.',
    rating: 8.9,
    scoresCount: 240,
    director: 'Wes Anderson',
    starring: ['Bill Murray, Edward Norton, Jude Law, Willem Dafoe, Saoirse Ronan, Tony Revoloru'],
    runTime: 99,
    genre: 'Drama',
    released: 2014,
    isFavorite: false,
  }, {
    id: 1,
    name: 'Fantastic Beasts: The Crimes of Grindelwald',
    posterImage: 'img/fantastic-beasts-the-crimes-of-grindelwald.jpg',
    previewImage: 'img/fantastic-beasts-the-crimes-of-grindelwald.jpg',
    backgroundImage: 'img/fantastic-beasts-the-crimes-of-grindelwald.jpg',
    backgroundColor: 'red',
    videoLink: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
    previewVideoLink: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
    description: 'Ne quid nimis',
    rating: 6.7,
    scoresCount: 150,
    director: 'Terry Spielberg',
    starring: ['Tom Roberts, Jeremy Storm, Ian McGregor, Ann Peterson'],
    runTime: 115,
    genre: 'Thriller',
    released: 2009,
    isFavorite: false,
  }, {
    id: 2,
    name: 'Aviator',
    posterImage: 'img/aviator.jpg',
    previewImage: 'img/aviator.jpg',
    backgroundImage: 'img/aviator.jpg',
    backgroundColor: 'green',
    videoLink: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
    previewVideoLink: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
    description: 'Sapientia est potentia.',
    rating: 9.9,
    scoresCount: 290,
    director: 'Wright brothers',
    starring: ['Leo Di Caprio, Arnold Smith, Veronica Steel, Debora Wilson'],
    runTime: 156,
    genre: 'Kids & Family',
    released: 2021,
    isFavorite: true,
  }, {
    id: 3,
    name: 'Revenant',
    posterImage: 'img/revenant.jpg',
    previewImage: 'img/revenant.jpg',
    backgroundImage: 'img/revenant.jpg',
    backgroundColor: 'yellow',
    videoLink: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
    previewVideoLink: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
    description: 'Tempus fugit, amor manet.',
    rating: 7.8,
    scoresCount: 190,
    director: 'Paul Johnson',
    starring: ['Bill Riley, Edward Vart, Jude Smith, Willem Durham, Scott Tenert, Tony Montar'],
    runTime: 86,
    genre: 'Comedy',
    released: 2011,
    isFavorite: false,
  }, {
    id: 4,
    name: 'Johnny English',
    posterImage: 'img/johnny-english.jpg',
    previewImage: 'img/johnny-english.jpg',
    backgroundImage: 'img/johnny-english.jpg',
    backgroundColor: 'black',
    videoLink: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
    previewVideoLink: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
    description: 'Ubi concordia, ibi victoria.',
    rating: 6.8,
    scoresCount: 110,
    director: 'Paul Miller',
    starring: ['Bill Murray, Edward Norton, Jude Law, Willem Dafoe, Saoirse Ronan, Tony Revoloru'],
    runTime: 123,
    genre: 'Horror',
    released: 2020,
    isFavorite: false,
  }, {
    id: 5,
    name: 'Shutter Island',
    posterImage: 'img/shutter-island.jpg',
    previewImage: 'img/shutter-island.jpg',
    backgroundImage: 'img/shutter-island.jpg',
    backgroundColor: 'blue',
    videoLink: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
    previewVideoLink: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
    description: 'Verit eo caudam, qua decidit arbore, malum.',
    rating: 9.1,
    scoresCount: 270,
    director: 'Kate Harrow',
    starring: ['Billy Mast, Edward Law, Jude Norton, Willem Dafoe, Tony Bigelow'],
    runTime: 177,
    genre: 'Sci-fi',
    released: 2001,
    isFavorite: true,
  }, {
    id: 6,
    name: 'Seven Years in Tibet',
    posterImage: 'img/seven-years-in-tibet.jpg',
    previewImage: 'img/seven-years-in-tibet.jpg',
    backgroundImage: 'img/seven-years-in-tibet.jpg',
    backgroundColor: 'green',
    videoLink: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
    previewVideoLink: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
    description: 'Vincit qui patitur.',
    rating: 8.5,
    scoresCount: 220,
    director: 'Tom Smith',
    starring: ['Bill Murray, Edward Norton, Jude Law, Willem Dafoe, Saoirse Ronan, Tony Revoloru'],
    runTime: 184,
    genre: 'Documentary',
    released: 1994,
    isFavorite: true,
  }, {
    id: 7,
    name: 'Midnight Special',
    posterImage: 'img/midnight-special.jpg',
    previewImage: 'img/midnight-special.jpg',
    backgroundImage: 'img/midnight-special.jpg',
    backgroundColor: 'white',
    videoLink: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
    previewVideoLink: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
    description: 'Vivit post funera virtus.',
    rating: 5.2,
    scoresCount: 100,
    director: 'Jeremy Almight',
    starring: ['Bill Murray, Edward Norton, Jude Law, Willem Dafoe, Saoirse Ronan, Tony Revoloru'],
    runTime: 88,
    genre: 'Romance',
    released: 2010,
    isFavorite: false,
  },
];

export const promoFilm: Film = {
  id: 0,
  name: 'The Grand Budapest Hotel',
  posterImage: 'img/the-grand-budapest-hotel-poster.jpg',
  previewImage: 'img/bohemian-rhapsody.jpg',
  backgroundImage: 'img/bg-the-grand-budapest-hotel.jpg',
  backgroundColor: 'green',
  videoLink: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
  previewVideoLink: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
  description: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave\'s friend and protege.',
  rating: 8.9,
  scoresCount: 240,
  director: 'Wes Anderson',
  starring: ['Bill Murray, Edward Norton, Jude Law, Willem Dafoe, Saoirse Ronan, Tony Revoloru'],
  runTime: 99,
  genre: 'Drama',
  released: 2014,
  isFavorite: false,
};
