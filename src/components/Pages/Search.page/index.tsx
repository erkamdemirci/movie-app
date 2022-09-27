import React, { useEffect, useState } from 'react';
import * as S from './styles';
import { useIntl } from 'react-intl';
import { useQuery } from '@tanstack/react-query';

import { SearchIcon } from '../../Icons';
import MovieList from '../../Movie/MovieList';
import { getSearchedMovies } from '../../../api';
import { Dispatch, SetStateAction } from 'react';
import { MovieType } from '../../Movie/MovieItem';

interface Props {
  setIsSearched: Dispatch<SetStateAction<boolean>>;
}

const SearchPage = ({ setIsSearched }: Props) => {
  const intl = useIntl();
  const [value, setValue] = useState('');
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState<MovieType[] | undefined>(undefined);
  const [searchQuery, setSearchQuery] = useState('');
  const { isLoading, data, refetch } = useQuery(['search-query', searchQuery, page], getSearchedMovies, { enabled: !!searchQuery });

  useEffect(() => {
    const delayFn = setTimeout(() => {
      setSearchQuery(value);
      setPage(1);
    }, 350);
    return () => clearTimeout(delayFn);
  }, [value]);

  useEffect(() => {
    if (!searchQuery) {
      setIsSearched(false);
      setMovies(undefined);
      return;
    }

    refetch();
    setIsSearched(true);
  }, [searchQuery, refetch, setIsSearched]);

  useEffect(() => {
    if (!data) return;
    if (data.page === 1) setMovies(data.results);
    else setMovies((prev) => prev?.concat(data.results));
  }, [data]);

  const inputChangeHandler = (e: any) => {
    setValue(e.target.value);
  };

  const fetchMore = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <S.SearchPageContainer>
      <S.SearchBarContainer>
        <SearchIcon />
        <input type="text" onChange={inputChangeHandler} placeholder={`${intl.formatMessage({ id: 'search_placeholder' })}`} />
      </S.SearchBarContainer>

      {movies && searchQuery ? (
        <MovieList
          title={`${intl.formatMessage({ id: 'searched_text' })}: ${searchQuery}`}
          isLoading={isLoading}
          fetchNextPage={fetchMore}
          totalResults={data?.total_results}
          movies={movies}
        />
      ) : null}
    </S.SearchPageContainer>
  );
};

export default SearchPage;
