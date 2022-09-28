import InfiniteScroll from 'react-infinite-scroll-component';
import { AnimatePresence } from 'framer-motion';
import { FormattedMessage } from 'react-intl';
import { useStoreContext } from '../../../context';
import { useIntl } from 'react-intl';

import * as S from './styles';
import MovieItem from '../MovieItem';
import { MovieType } from '../MovieItem';

interface Props {
  movies: MovieType[];
  fetchNextPage: any;
  isLoading?: any;
  title: any;
  totalResults?: number;
  sortBy?: string;
  isSearched?: boolean;
}

const MovieList = ({ movies, fetchNextPage, isLoading, title, totalResults = 0, isSearched = false }: Props) => {
  const intl = useIntl();

  const { sortBy, sortByHandler } = useStoreContext();

  if (isLoading)
    <S.Loading>
      <img src="https://media4.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif" alt="Loading..." />
    </S.Loading>;
  return (
    <S.MoviesContainer>
      <S.Header>
        <h1>{title}</h1>
        {!isSearched && (
          <S.Sorting>
            <select defaultValue={sortBy ?? ''} onChange={(e) => sortByHandler(e.target.value)}>
              <option value="">{`${intl.formatMessage({ id: 'sort_by_text' })}:`}</option>
              <option value="popularity.asc">{`${intl.formatMessage({ id: 'popularity_text' })}:`} ↑</option>
              <option value="popularity.desc">{`${intl.formatMessage({ id: 'popularity_text' })}:`} ↓</option>
              <option value="vote_count.asc">{`${intl.formatMessage({ id: 'by_vote_text' })}:`} ↑</option>
              <option value="vote_count.desc">{`${intl.formatMessage({ id: 'by_vote_text' })}:`} ↓</option>
            </select>
          </S.Sorting>
        )}
      </S.Header>
      {movies?.length ? (
        <InfiniteScroll
          dataLength={movies.length}
          hasMore={movies.length < totalResults}
          next={fetchNextPage}
          endMessage={null}
          loader={null}
          className="infiniteContainer"
        >
          <AnimatePresence>
            {movies?.map((movie: MovieType, idx: number) => (
              <MovieItem key={idx} movie={movie} />
            ))}
            {(isLoading || totalResults < movies.length) && movies.length && (
              <S.Loading>
                <img src="https://media4.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif" alt="Loading..." />
              </S.Loading>
            )}
          </AnimatePresence>
        </InfiniteScroll>
      ) : null}

      {!isLoading && movies.length === 0 && (
        <S.WarningText>
          <FormattedMessage id="no_result" />
        </S.WarningText>
      )}
    </S.MoviesContainer>
  );
};

export default MovieList;
