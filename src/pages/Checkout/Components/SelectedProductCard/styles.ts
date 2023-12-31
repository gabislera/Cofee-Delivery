import { styled } from "styled-components";

export const SelectedProductContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors['base-button']};

  > div {
    display: flex;
    align-items: center;
    gap: 20px;

    img {
      max-width: 4rem;
    }
  }

  > strong {
    font-family: 'Roboto', sans-serif;
    color: ${({ theme }) => theme.colors['base-text']};
    font-size: 1rem;
    font-weight: 700;
    line-height: 130%;
    align-self: flex-start;
  }
`

export const DetailsSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  strong {
    font-family: 'Roboto', sans-serif;
    color: ${({ theme }) => theme.colors['base-subtitle']};
    font-size: 1rem;
    font-weight: 400;
    line-height: 130%;
  }

  div {
    display: flex;
    gap: 0.5rem;
  }
`


