import React, { useEffect, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { useInfiniteQuery } from '@tanstack/react-query';

import { getPopularMovies } from '../../../api';
import MovieList from '../../Movie/MovieList/index';
import SearchBar from '../../SearchBar';
import FiltersBar from '../../Filters';
import * as S from './styles';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const { data, fetchNextPage } = useInfiniteQuery(['popular-movies'], getPopularMovies, {
    getNextPageParam: (_lastPage, pages) => {
      if (pages.length < 4) return pages.length + 1;
      else return undefined;
    }
  });

  useEffect(() => {
    if (!data?.pages) return;
    setMovies((prev) => prev.concat(data?.pages[data.pages.length - 1]));
  }, [data?.pages]);

  useEffect(() => {
    console.log(movies);
  }, [movies]);

  return (
    <S.HomeContainer>
      <SearchBar />
      <FiltersBar />
      <MovieList fetchNextPage={fetchNextPage} movies={movies} />
    </S.HomeContainer>
  );
};

export default HomePage;
