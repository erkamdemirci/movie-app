import styled from 'styled-components';
import { motion } from 'framer-motion';

export const MoviesContainer = styled(motion.div)`
  h1 {
    margin: 0;
    margin-bottom: 30px;
    text-align: center;
  }

  .infiniteContainer {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
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
