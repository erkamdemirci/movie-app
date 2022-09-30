import styled from 'styled-components';

export const DetailsPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1250px;
  margin: 0 auto;
  gap: 20px;
  width: 100%;

  button {
    align-self: flex-start;
    background-color: transparent;
    border: 1px solid lightgray;
    padding: 10px 20px;
    border-radius: 50px;
    font-weight: 900;
  }

  .details {
    display: flex;
    flex-direction: row;
    gap: 20px;
    align-items: center;

    img {
      width: 300px;
      object-fit: cover;
      border-radius: 30px;
      margin: 10px;
    }

    .content {
      display: flex;
      flex-direction: column;
      gap: 15px;

      h1 {
        margin: 0;
        margin-top: 20px;
      }

      .tagline {
        font-size: 1.25rem;
        font-weight: 100;
      }

      .vote {
        display: flex;
        align-items: center;
        .vote-average {
          display: flex;
          align-items: center;
          justify-content: center;
          border: 4px solid black;
          width: 45px;
          height: 45px;
          border-radius: 100px;
          margin-right: 10px;
        }
      }

      .overview > span {
        line-height: 25px;
      }

      div > span:first-child {
        margin-right: 5px;
        font-weight: 900;
      }
    }
  }

  @media only screen and (max-width: 1024px) {
    img {
      width: 100px;
      object-fit: cover;
      border-radius: 30px;
      margin: 10px;
    }
  }

  @media only screen and (max-width: 768px) {
    .actions {
      font-size: 2rem;
    }
  }

  @media only screen and (max-width: 640px) {
    .details {
      flex-direction: column;

      img {
        margin: 0px;
      }
      .content {
        padding: 10px;
        gap: 10px;
        h1 {
          margin: 0;
          font-size: 1.5rem;
        }
        .tagline {
          font-size: 1rem;
        }
      }
    }
  }
`;

export const CastList = styled.div`
  display: flex;
  flex-wrap: wrap;

  h1 {
    display: block;
    width: 100%;
  }

  .person {
    display: flex;
    flex-direction: column;
    gap: 10px;
    flex-basis: 16.5%;
    padding: 5px;
    margin-bottom: 10px;
    text-align: center;

    img {
      width: 100%;
      object-fit: cover;
      border-radius: 10px;
      aspect-ratio: 2/3;
      object-fit: cover;
    }

    .name {
      font-size: 1rem;
    }

    .character {
      font-size: 0.75rem;
      font-weight: 900;
      background-color: lightgray;
      padding: 5px 10px;
    }
  }

  @media only screen and (max-width: 1024px) {
    .person {
      flex-basis: 24.5%;
    }
  }

  @media only screen and (max-width: 768px) {
    .person {
      flex-basis: 32.5%;
    }
  }

  @media only screen and (max-width: 640px) {
    .person {
      flex-basis: 47.5%;

      .name {
        font-size: 0.85rem;
      }
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
