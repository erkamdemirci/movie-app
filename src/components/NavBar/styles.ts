import styled from 'styled-components';

export const NavBarContainer = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 2rem;
  max-width: 1250px;
  margin: 0 auto;
  padding: 20px 10px;
  align-items: center;

  a {
    text-decoration: none;
  }

  .logo {
    margin-right: auto;
    font-weight: 900;
  }

  .actions {
    button {
      background: none;
      border: none;
      padding: 0;
      margin-left: 7.5px;
    }

    span {
      font-size: 2.5rem;
    }
  }

  @media only screen and (max-width: 1024px) {
    .actions {
      span {
        font-size: 2.5rem;
      }
    }
  }

  @media only screen and (max-width: 640px) {
    .actions {
      span {
        font-size: 1.75rem;
      }
    }
  }
`;
