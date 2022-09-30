import { useEffect, useState } from 'react';
import * as S from './styles';
import { useIntl } from 'react-intl';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

import MovieList from '../../Movie/MovieList';
import { getSearchedMovies } from '../../../api';
import { MovieType } from '../../Movie/MovieItem';

const SearchPage = () => {
  const intl = useIntl();
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState<MovieType[]>();
  let { query } = useParams();
  const { isLoading, data } = useQuery(['search-query', query, page], getSearchedMovies, { staleTime: 30000, enabled: !!query });

  useEffect(() => {
    if (!data) return;
    if (data.page === 1) setMovies(data.results);
    else setMovies((prev) => prev?.concat(data.results));
  }, [data]);

  const fetchMore = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <S.SearchPageContainer>
      <MovieList
        isSearched={true}
        title={`${intl.formatMessage({ id: 'searched_text' })}: ${query}`}
        isLoading={isLoading}
        fetchNextPage={fetchMore}
        totalResults={data?.total_results}
        movies={movies ?? []}
      />
    </S.SearchPageContainer>
  );
};

export default SearchPage;
