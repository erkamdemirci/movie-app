import React from 'react';
import * as S from './styles';
import { FormattedMessage } from 'react-intl';

type Movie = {
  title: string;
  vote_count: number;
  popularity: number;
  poster_path: string;
};

interface Props {
  movie: Movie;
}

const MovieItem = ({ movie }: Props) => {
  if (!movie) return <>Movie Error!</>;
  return (
    <S.MovieItemContainer>
      <div className="popularity">
        <span className="point">{Math.floor(movie.popularity / 100)}</span>
        <span className="vote">
          <FormattedMessage id="vote_count" values={{ vote_count: movie.vote_count }} />
        </span>
      </div>
      <a href="/" className="poster">
        <div className="curtain">
          <span>Show Details</span>
        </div>
        <img src={`https://image.tmdb.org/t/p/w500//${movie.poster_path}`} alt="" />
      </a>
      <span className="title">{movie.title}</span>
    </S.MovieItemContainer>
  );
};

export default MovieItem;
