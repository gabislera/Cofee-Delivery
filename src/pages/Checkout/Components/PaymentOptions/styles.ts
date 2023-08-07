import { styled } from "styled-components"

export const PaymentMethodOptionsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.75rem;

  /* p {
    color: ${({ theme }) => theme.colors['base-error']};
    font-size: 0.875rem;
    grid-column: span 3;
  } */
`

export const PaymentMethodContainer = styled.div`
  input {
    visibility: hidden;
    appearance: none;
    display: none;
  }

  input:checked + label div {
    background: ${({ theme }) => theme.colors['brand-purple-dark']};
    color: ${({ theme }) => theme.colors['brand-purple']};
  }
`


export const ContentContainer = styled.div`
  padding: 0 1rem;
  background: ${({ theme }) => theme.colors['base-button']};
  color: ${({ theme }) => theme.colors['base-text']};
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.5rem;
  font-size: 0.75rem;
  text-transform: uppercase;
  border-radius: 6px;
  height: 3rem;
  border: 1px solid ${({ theme }) => theme.colors['base-button']};
  transition: 0.5s;

  svg {
    color: ${({ theme }) => theme.colors['purple-light']};
  }

  &:hover {
    background: ${({ theme }) => theme.colors['base-hover']};
  }

  user-select: none;
`