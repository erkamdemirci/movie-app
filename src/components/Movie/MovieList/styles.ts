import styled from 'styled-components';
import { motion } from 'framer-motion';

export const MoviesContainer = styled(motion.div)`
  h1 {
    margin: 0;
    margin-left: 15px;
  }

  .infiniteContainer {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

  @media only screen and (max-width: 1024px) {
    h1 {
      font-size: 1.75rem;
    }
  }

  @media only screen and (max-width: 768px) {
    h1 {
      font-size: 1.25rem;
    }
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;

  @media only screen and (max-width: 1024px) {
    h1 {
      font-size: 1.5rem;
    }
  }

  @media only screen and (max-width: 640px) {
    flex-direction: column;
  }
`;

export const Sorting = styled.div`
  select  {
    border: 2px solid black;
    border-radius: 5px;
    font-weight: 900;
    outline: none;

    -webkit-appearance: none;
    -moz-appearance: none;
    background: transparent;
    background-image: url("data:image/svg+xml;utf8,<svg fill='black' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>");
    background-repeat: no-repeat;
    background-position-x: 90%;
    background-position-y: 50%;
    padding: 1rem;
    padding-right: 2.5rem;
  }

  @media only screen and (max-width: 1024px) {
    select {
    }
  }

  @media only screen and (max-width: 640px) {
    width: 100%;

    select {
      margin-bottom: 10px;
      width: 100%;
      padding-right: 0;
      background-position-x: 95%;
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

export const WarningText = styled.div`
  width: 100%;
  text-align: center;
  font-weight: 900;
  padding: 30px;
  color: red;
  font-size: 1.5rem;
`;
