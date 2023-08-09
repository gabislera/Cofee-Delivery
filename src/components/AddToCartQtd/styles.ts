import { styled } from "styled-components";

export const AddToCartQtdContainer = styled.div`
  display: flex;
  gap: 8px;

  div {
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 8px;
    gap: 4px;
    background: ${({ theme }) => theme.colors['base-button']};
    border-radius: 6px;

    > span {
        font-size: 1.2rem;
        color: ${({ theme }) => theme.colors['base-title']};
    }

    > button {
        border: none;
        color: ${({ theme }) => theme.colors['brand-purple']};
        background: ${({ theme }) => theme.colors['base-button']};

      &:hover {
        background: transparent;
        color: ${({ theme }) => theme.colors['brand-purple-dark']};
      }
    }
  }
  `

export const AddButton = styled.button`
  padding: 8px;
  background: ${({ theme }) => theme.colors['brand-purple']};
  border-radius: 6px;
  border: none;
  color: ${({ theme }) => theme.colors['brand-white']};

  &:disabled {
    background: ${({ theme }) => theme.colors['brand-purple-light']};
    cursor: not-allowed;
  }

  &:disabled(:hover) {
    background: ${({ theme }) => theme.colors['brand-purple-dark']};
  }
  
  svg {
    color: ${({ theme }) => theme.colors['base-white']};
  }
`

export const RemoveButton = styled.button`
  padding: 8px;
  background: ${({ theme }) => theme.colors['base-button']};
  border-radius: 6px;
  border: none;
  color: ${({ theme }) => theme.colors['brand-white']};

  display: flex;
  align-items: center;
  gap: 0.25rem;
  
  svg {
    color: ${({ theme }) => theme.colors['brand-purple']};
  }
`
