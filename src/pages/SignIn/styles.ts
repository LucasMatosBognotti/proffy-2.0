import styled from 'styled-components';

import signBackground from '../../assets/sign-background.png';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Background = styled.div`
  flex: 1;
  background: url(${signBackground}) no-repeat center;
  background-size: cover;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  max-width: 600px;

  form {
    margin: 50px 0;
    width: 350px;
    text-align: center;

    h1 {
      font-family: 'Poppins';
      font-size: 3.6rem;
      color: var(--color-text-title);
      margin-bottom: 24px;
      text-align: left;
    }

    > div {
      display: flex;
      align-items: center;
      justify-content: space-between;

      p {
        margin-top: 2rem;
        font: normal 1.4rem Poppins;
        color: var(--color-text-complement);
      }

      a {
        color: var(--color-text-complement);
        font: normal 1.4rem Poppins;
        display: block;
        text-decoration: none;
        margin-top: 2rem;
        transition: color 0.2s;

        &:hover {
          color: var(--color-text-base);
        }
      }
    }

    button {
      width: 100%;
      height: 56px;
      font: 600 1.6rem Archivo;
      border-radius: 10px;
      padding: 0 16px;
      border: 0;
      background: var(--color-secundary);
      color: var(--color-title-in-primary);
      margin-top: 4rem;
      transition: background 1s;

      &:hover {
        background: var(--color-secundary-dark);
      }
    }
  }

`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 350px;
  margin-top: 4rem;

  p {
    font: normal 1.2rem Poppins;
    color: var(--color-text-complement);

    > a {
      color: var(--color-primary);
      display: block;
      text-decoration: none;
      font: 600 1.4rem Poppins;
      transition: color 0.2s;

      &:hover {
        color: var(--color-primary-darker);
      }
    }
  }

  span {
    font: normal 1.2rem Poppins;
    color: var(--color-text-complement);
  }
`;
