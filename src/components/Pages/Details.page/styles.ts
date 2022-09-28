import styled from 'styled-components';

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
`;

export const DetailsPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 500px;
  max-width: 1250px;
  margin: 0 auto;
  gap: 20px;

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
`;

export const Loading = styled.div`
  align-self: center;
  flex-basis: 20%;
  text-align: center;

  img {
    width: 200px;
  }
`;
