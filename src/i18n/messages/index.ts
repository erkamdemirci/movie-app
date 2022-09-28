import { LOCALES } from '../locales';

export const messages = {
  [LOCALES.ENGLISH]: {
    search_placeholder: 'Search a movie...',
    searched_text: 'Searched',
    popular_movies: 'Popular Movies',
    no_result: 'No results...',
    sort_by_text: 'Sort By',
    popularity_text: 'Popularity',
    by_vote_text: 'Vote Count',
    vote_count: `{vote_count} Votes`
  },
  [LOCALES.TURKISH]: {
    search_placeholder: 'Bir film arayın...',
    searched_text: 'Arama',
    popular_movies: 'Popüler Filmler',
    no_result: 'Sonuç yok...',
    sort_by_text: 'Sırala',
    popularity_text: 'Popülarite',
    by_vote_text: 'Oylara Göre',
    vote_count: `{vote_count} Oy`
  }
};
