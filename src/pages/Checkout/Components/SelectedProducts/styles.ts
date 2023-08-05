import { styled } from "styled-components"

export const SelectedProductsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem; // mudar
  width: 28rem; //confirmar

  > h1 {
    font-family: 'Baloo 2', cursive;
    font-size: 1.125rem;
    font-weight: 700;
    line-height: 130%;
  }
`

export const SelectedProductsSection = styled.div`
  background: ${({ theme }) => theme.colors['base-card']};
  border-radius: 6px 36px;
  display: flex;
  flex-direction: column;
  padding: 2.5rem;

  gap: 1.5rem;
`

export const ConfirmSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  div {
    display: flex;
    justify-content: space-between;

    span {
      font-family: 'Roboto', sans-serif;
      color: ${({ theme }) => theme.colors['base-text']};
      font-size: 0.875rem;
      font-weight: 400;
      line-height: 130%;
    }

    strong {
      font-family: 'Roboto', sans-serif;
      color: ${({ theme }) => theme.colors['base-text']};
      font-size: 1rem;
      font-weight: 400;
      line-height: 130%;
    }

    h2 {
      font-family: 'Roboto', sans-serif;
      color: ${({ theme }) => theme.colors['base-text']};
      font-size: 1.25rem;
      font-weight: 700;
      line-height: 130%;
    }
  }

  button {
      background: ${({ theme }) => theme.colors['brand-yellow']};
      border-radius: 6px;
      padding: 0.75rem 0.5rem;
      color: ${({ theme }) => theme.colors['base-white']};
      font-size: 0.875rem;
      border: none;
      width: 100%;

  }
`

