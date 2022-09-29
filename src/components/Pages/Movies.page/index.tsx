import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useIntl } from 'react-intl';
import { useParams } from 'react-router-dom';

import * as S from './styles';
import MovieList from '../../Movie/MovieList/index';

import { getPopularMovies } from '../../../api';
import { MovieType } from '../../Movie/MovieItem';
import { useStoreContext } from '../../../context';
import DetailsPage from '../Details.page';

const MoviesPage = () => {
  const intl = useIntl();
  const { sortBy } = useStoreContext();
  let { query } = useParams();

  const [page, setPage] = useState<number>(1);
  const [movies, setMovies] = useState<MovieType[]>();

  const { isLoading, data } = useQuery(['popular-movies', page, sortBy], getPopularMovies, { staleTime: 30000 });

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
    setPage((prev) => (prev ? prev + 1 : 1));
  };

  return (
    <S.MoviesContainer>
      {query ? (
        <DetailsPage />
      ) : (
        <MovieList
          title={`${intl.formatMessage({ id: 'popular_movies' })}`}
          isLoading={isLoading}
          fetchNextPage={fetchMore}
          totalResults={data?.total_results}
          movies={movies ?? []}
        />
      )}
    </S.MoviesContainer>
  );
};

export default MoviesPage;
