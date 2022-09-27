import styled from 'styled-components';

export const SearchPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const SearchBarContainer = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid lightgray;
  border-radius: 30px;
  height: 60px;
  align-items: center;
  padding: 0 15px;

  svg {
    width: 30px;
    height: 30px;
    margin-right: 10px;
  }

  input {
    border: none;
    height: 30px;
    width: 100%;
    outline: none;
    font-size: 1.25rem;
    font-weight: 900;

    &::placeholder {
      font-weight: 100;
      color: black;
      opacity: 30%;
      font-size: 1.25rem;
    }
  }
`;

export const Loading = styled.div`
  align-self: center;
  flex-basis: 20%;
  text-align: center;

  img {
    width: 200px;
  }
`;
