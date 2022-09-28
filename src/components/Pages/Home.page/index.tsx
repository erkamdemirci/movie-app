import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useIntl } from 'react-intl';

import * as S from './styles';
import MovieList from '../../Movie/MovieList/index';
import SearchPage from '../Search.page';

import { getPopularMovies } from '../../../api';
import { MovieType } from '../../Movie/MovieItem';
import { useStoreContext } from '../../../context';

const HomePage = () => {
  const intl = useIntl();
  const { sortBy } = useStoreContext();

  const [isSearched, setIsSearched] = useState<boolean>(false);
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState<MovieType[] | undefined>(undefined);

  const { isLoading, data } = useQuery(['popular-movies', page, sortBy], getPopularMovies);

  useEffect(() => {
    if (!data) return;
    if (data.page === 1) setMovies(data.results);
    else setMovies((prev) => prev?.concat(data.results));
  }, [data]);

  useEffect(() => {
    if (!sortBy) return;
    setPage(1);
  }, [sortBy]);

  const fetchMore = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <S.HomeContainer>
      <SearchPage setIsSearched={setIsSearched} />
      {!isSearched && (
        <MovieList
          title={`${intl.formatMessage({ id: 'popular_movies' })}`}
          isLoading={isLoading}
          fetchNextPage={fetchMore}
          totalResults={data?.total_results}
          movies={movies ?? []}
        />
      )}
    </S.HomeContainer>
  );
};

export default HomePage;
