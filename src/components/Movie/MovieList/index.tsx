import { SetStateAction } from 'react';
import * as S from './styles';
import MovieItem from '../MovieItem';
import InfiniteScroll from 'react-infinite-scroll-component';

interface Props {
  movies: any;
  fetchNextPage: any;
}

const MovieList = ({ movies, fetchNextPage }: Props) => {
  return (
    <S.MoviesContainer>
      {movies && (
        <InfiniteScroll
          dataLength={movies.length}
          hasMore={movies.length < 150}
          next={fetchNextPage}
          endMessage={null}
          loader={null}
          className="infiniteContainer"
        >
          {movies?.map((movie: any, idx: any) => (
            <MovieItem key={idx} movie={movie} />
          ))}
        </InfiniteScroll>
      )}
    </S.MoviesContainer>
  );
};

export default MovieList;
