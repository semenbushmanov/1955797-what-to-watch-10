import { Comments } from '../types/film';

export const comments: Comments = [
  {
    comment: 'Quam bene vivas refert, non quam diu.',
    date: 'November 25, 2021',
    id: 0,
    rating: 7.2,
    user: {
      id: 10,
      name: 'Bob Evans',
    },
  }, {
    comment: 'Optimum medicamentum quies est.',
    date: 'September 29, 2020',
    id: 1,
    rating: 6.4,
    user: {
      id: 11,
      name: 'Tommy Nigel',
    },
  }, {
    comment: 'Nulla regula sine exceptione.',
    date: 'April 11, 2019',
    id: 2,
    rating: 9.1,
    user: {
      id: 12,
      name: 'Robert Michaelson',
    },
  }, {
    comment: 'Non alios suo modulo metiri.',
    date: 'June 15, 2022',
    id: 3,
    rating: 3.7,
    user: {
      id: 13,
      name: 'Lisa Ash',
    },
  },
];
