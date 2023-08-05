import { styled } from "styled-components"

export const CompleteOrderContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem; // mudar

  > h1 {
    font-family: 'Baloo 2', cursive;
    font-size: 1.125rem;
    font-weight: 700;
    line-height: 130%;
  }
`

export const OrderSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  background: ${({ theme }) => theme.colors['base-card']};
  border-radius: 6px;
  padding: 40px;
  max-width: 640px;
`

export const SectionTitle = styled.div`
  display: flex;
  gap: 0.5rem;
    
  div {
    display: flex;
    flex-direction: column;
    gap: 0;

    strong {
    font-family: 'Roboto', sans-serif;
    color: ${({ theme }) => theme.colors['base-title']};
    font-size: 1rem;
    font-weight: 400;
    line-height: 130%;
  }

  span {
    font-family: 'Roboto', sans-serif;
    color: ${({ theme }) => theme.colors['base-title']};
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 130%
  }
}
`

export const AddressContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 12.5rem 17.5rem 3.75rem;
  column-gap: 0.75rem;
  row-gap: 1rem;

  input {
    padding: 12px;
    background: ${({ theme }) => theme.colors['base-input']};
    border: 1px solid ${({ theme }) => theme.colors['base-button']};
    border-radius: 4px;
  }

  #cep {
    grid-column: span 3;
    max-width: 12.5rem;
  }

  #street {
    grid-column: span 3;
  }

  #complement {
    grid-column: span 2;
  }
`

