import styled from 'styled-components';

export const NavBarContainer = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 2rem;
  max-width: 1250px;
  margin: 0 auto;
  padding: 20px 10px;

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

      span {
        font-size: 2.5rem;
      }
    }
  }
`;
