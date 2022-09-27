import styled from 'styled-components';

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
    font-size: 1.35rem;

    &::placeholder {
      font-weight: 100;
      color: black;
      opacity: 30%;
      font-size: 1.35rem;
    }
  }
`;
