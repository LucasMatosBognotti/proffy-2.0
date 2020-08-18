import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  height: 72px;
  border-radius: 10px;
  padding: 16px;

  background: var(--color-input-background);

  display: flex;
  align-items: center;

  position: relative;

  ${props => props.isFocused && css`
    &::before {
      content: '';
      width: 2px;
      height: 60%;
      left: 0;
      top: 20%;
      background: var(--color-primary-light);
      position: absolute;
    }
  `}

  & + div {
    margin-top: 8px;
  }

  input {
    flex: 1;
    background: transparent;
    border: 0;

    color: var(--color-text-complement);
    font-size: 1.6rem;
    font-family: 'Poppins';
    font-weight: normal;

    &::placeholder {
      color: var(--color-text-complement);
      font-size: 1.6rem;
      font-family: 'Poppins';
      font-weight: normal;
    }
  }

  svg {
    margin-right: 16px;
  }
`;
