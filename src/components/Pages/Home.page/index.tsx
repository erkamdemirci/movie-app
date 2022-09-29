import { useState } from 'react';
import { useIntl } from 'react-intl';
import { useNavigate, useParams } from 'react-router-dom';

import * as S from './styles';
import MoviesPage from '../Movies.page';
import { SearchIcon } from '../../Icons';
import SearchPage from '../Search.page';

const Homepage = () => {
  const intl = useIntl();
  const navigate = useNavigate();
  const { page } = useParams();
  const [searchValue, setSearchValue] = useState('');

  const inputChangeHandler = (e: any) => {
    setSearchValue(e.target.value);
  };

  const searchHandler = (e: any) => {
    e.preventDefault();
    if (!searchValue) return;
    navigate(`/search/${searchValue}`);
  };

  return (
    <S.HomeContainer>
      {!(page === 'details') && (
        <S.SearchBarContainer>
          <SearchIcon />
          <input type="text" value={searchValue} onChange={inputChangeHandler} placeholder={`${intl.formatMessage({ id: 'search_placeholder' })}`} />
          <button type="submit" onClick={searchHandler}>{`${intl.formatMessage({ id: 'search_text' })}`}</button>
        </S.SearchBarContainer>
      )}
      {page === 'search' ? <SearchPage /> : <MoviesPage />}
    </S.HomeContainer>
  );
};

export default Homepage;
