import { useEffect } from 'react';
import * as S from './styles';
import { FormattedMessage } from 'react-intl';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { getMovieDetails, getMovieCast } from '../../../api';
import { useNavigate } from 'react-router-dom';

const DetailsPage = () => {
  const navigate = useNavigate();

  let { movieId } = useParams();

  const { isLoading, data: movie } = useQuery(['movie-details', movieId], getMovieDetails);
  const { isLoading: castLoading, data: castList } = useQuery(['movie-cast', movieId], getMovieCast);

  if (isLoading)
    return (
      <S.Loading>
        <img src="https://media4.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif" alt="Loading..." />
      </S.Loading>
    );

  if (!movie) return <>no movie</>;

  return (
    <S.DetailsPageContainer>
      <button onClick={() => navigate(-1)}>
        ← <FormattedMessage id="go_back" />
      </button>
      <div className="details">
        <img
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
              : 'https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-1.jpg'
          }
          alt={movie.title}
        />
        <div className="content">
          <h1>{movie.title ?? movie.original_title}</h1>
          <div className="tagline">{movie.tagline}</div>
          <div className="vote">
            <span className="vote-average">{movie.vote_average.toFixed(1)}</span>
            <span className="vote-count">
              <FormattedMessage id="vote_count" values={{ vote_count: movie.vote_count }} />
            </span>
          </div>
          <div className="genres">
            <span>
              <FormattedMessage id="genres" />:
            </span>
            {movie.genres &&
              movie.genres.map((genre: any, idx: number) => (
                <span key={genre.name} className="genre">
                  {genre.name}
                  {idx !== movie.genres.length - 1 && ', '}
                </span>
              ))}
          </div>
          <div className="languages">
            <span>
              <FormattedMessage id="languages" />:
            </span>
            {movie.spoken_languages &&
              movie.spoken_languages.map((language: any, idx: number) => (
                <span key={language.name} className="language">
                  {language.name}
                  {idx !== movie.spoken_languages.length - 1 && ', '}
                </span>
              ))}
          </div>
          <div className="date">
            <span>
              <FormattedMessage id="release_date" />:
            </span>
            <span>{movie.release_date}</span>
          </div>
          <div className="overview">
            <span>
              <FormattedMessage id="overview" />:
            </span>
            <span>{movie.overview}</span>
          </div>
        </div>
      </div>
      <S.CastList>
        <h1>
          <FormattedMessage id="cast_list" />:
        </h1>
        {castList
          ? castList?.map((person: any) => (
              <div className="person">
                <img
                  loading="lazy"
                  src={
                    person.profile_path
                      ? `https://image.tmdb.org/t/p/w500/${person.profile_path}`
                      : 'https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-1.jpg'
                  }
                  alt={person.name}
                />
                <span className="name">{person.name}</span>
                <span className="character">{person.character}</span>
              </div>
            ))
          : castLoading && (
              <S.Loading>
                <img src="https://media4.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif" alt="Loading..." />
              </S.Loading>
            )}
      </S.CastList>
    </S.DetailsPageContainer>
  );
};

export default DetailsPage;
