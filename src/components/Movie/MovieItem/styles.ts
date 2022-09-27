import styled from 'styled-components';
import { motion } from 'framer-motion';

export const MovieItemContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  flex-basis: 20%;
  padding: 10px;
  gap: 10px;
  position: relative;
  margin-bottom: 20px;

  .poster {
    position: relative;

    img,
    .curtain {
      border-radius: 40px;
      border-top-left-radius: 0;
      overflow: hidden;
      width: 100%;
    }

    img {
      aspect-ratio: 2/3;
      object-fit: cover;
    }

    .curtain {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      display: none;
      background-color: rgba(0, 0, 0, 0.75);
      justify-content: center;
      align-items: center;

      span {
        color: white;
        font-weight: 900;
        font-size: 1.25rem;
      }
    }

    &:hover {
      .curtain {
        display: flex;
      }
    }
  }
  .popularity {
    display: flex;
    align-items: flex-start;
    margin-bottom: -30px;
    z-index: 10;
    background-color: transparent;

    .point {
      color: white;
      font-weight: 900;
      background-color: black;
      border: 2px solid yellow;
      border-radius: 30px;
      border-bottom-left-radius: 0;
      border-left: none;
      padding: 10px;
      margin-right: 5px;
    }

    .vote {
      font-size: 0.85rem;
      font-weight: 600;
    }
  }

  .title {
    font-size: 1.1rem;
    font-weight: 600;
    padding: 0 10px;
    text-align: center;
  }
`;
