import React from 'react';
import * as S from './styles';
import { useIntl } from 'react-intl';

import { SearchIcon } from '../Icons';
const SearchBar = () => {
  const intl = useIntl();
  return (
    <S.SearchBarContainer>
      <SearchIcon />
      <input type="text" placeholder={`${intl.formatMessage({ id: 'movie_search' })}`} />
    </S.SearchBarContainer>
  );
};

export default SearchBar;
