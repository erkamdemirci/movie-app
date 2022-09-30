import styled from 'styled-components';

export const HomeContainer = styled.div`
  max-width: 1250px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin: 0 auto;
`;

export const SearchBarContainer = styled.form`
  display: flex;
  flex-direction: row;
  border: 1px solid lightgray;
  border-radius: 30px;
  height: 60px;
  align-items: center;
  padding: 0 15px;
  position: relative;

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

  button {
    cursor: pointer;
    background-color: black;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    color: white;
    padding: 0 30px;
    border: none;
    text-transform: uppercase;
    border-radius: 50px;

    &:hover {
      opacity: 50%;
    }
  }

  @media only screen and (max-width: 1024px) {
    height: 60px;
    svg {
      width: 25px;
      height: 25px;
    }

    input {
      font-size: 1.15rem;
      &::placeholder {
        font-size: 1.15rem;
      }
    }

    button {
      padding: 0 25px;
    }
  }

  @media only screen and (max-width: 768px) {
    height: 50px;
    svg {
      width: 20px;
      height: 20px;
    }

    input {
      font-size: 1rem;
      &::placeholder {
        font-size: 1rem;
      }
    }

    button {
      padding: 0 15px;
    }
  }
`;
