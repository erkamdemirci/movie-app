import axios from 'axios';

interface QueryProps {
  queryKey?: any;
}

export const getPopularMovies = ({ queryKey }: QueryProps) => {
  const page = queryKey[1];
  const sortBy = queryKey[2];
  return axios
    .get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDBKEY}&language=en-US&page=${page}${
        sortBy ? `&sort_by=${sortBy}` : ''
      }`
    )
    .then((res) => res.data);
};

export const getSearchedMovies = ({ queryKey }: QueryProps) => {
  const searchQuery = queryKey[1];
  const page = queryKey[2];
  return axios
    .get(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDBKEY}&query=${searchQuery}&page=${page}`)
    .then((res) => res.data);
};

export const getMovieDetails = ({ queryKey }: QueryProps) => {
  const movieId = queryKey[1];
  return axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.REACT_APP_TMDBKEY}`).then((res) => res.data);
};

export const getMovieCast = ({ queryKey }: QueryProps) => {
  const movieId = queryKey[1];
  return axios.get(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${process.env.REACT_APP_TMDBKEY}`).then((res) => res.data.cast);
};
