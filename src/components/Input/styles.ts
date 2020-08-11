import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 72px;
  border-radius: 10px;
  padding: 16px;

  background: var(--color-input-background);

  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

  input {
    flex: 1;
    background: transparent;
    border: 0;

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
