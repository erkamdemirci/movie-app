import React from 'react';
import axios from 'axios';

interface QueryProps {
  pageParam?: any;
}

export const getPopularMovies = ({ pageParam = 1 }: QueryProps) => {
  console.log({ pageParam });
  return axios
    .get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TMDBKEY}&language=en-US&page=${pageParam}`)
    .then((res) => res.data.results);
};
