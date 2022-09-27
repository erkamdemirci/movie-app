import * as S from './styles';
import MovieItem from '../MovieItem';
import InfiniteScroll from 'react-infinite-scroll-component';
import { AnimatePresence } from 'framer-motion';
import { FormattedMessage } from 'react-intl';

interface Props {
  movies: any;
  fetchNextPage: any;
  isLoading?: any;
  title: any;
  totalResults?: number;
}

const MovieList = ({ movies, fetchNextPage, isLoading, title, totalResults = 0 }: Props) => {
  if (isLoading)
    <S.Loading>
      <img src="https://media4.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif" alt="Loading..." />
    </S.Loading>;
  return (
    <S.MoviesContainer>
      <h1>{title}</h1>
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
            {movies?.map((movie: any, idx: any) => (
              <MovieItem key={idx} movie={movie} />
            ))}
            {(isLoading || totalResults < movies.length) && movies.length && (
              <S.Loading>
                <img src="https://media4.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif" alt="Loading..." />
              </S.Loading>
            )}
          </AnimatePresence>
        </InfiniteScroll>
      ) : (
        <S.WarningText>
          <FormattedMessage id="no_result" />
        </S.WarningText>
      )}
    </S.MoviesContainer>
  );
};

export default MovieList;
