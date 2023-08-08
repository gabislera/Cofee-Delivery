import { styled } from "styled-components"

export const ProductCardContainer = styled.div`
  margin-top: 3.375rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 256px;
  background: ${({ theme }) => theme.colors['base-card']};
  padding: 0 20px 20px;

  border-radius: 6px 36px;

  img {
    max-width: 7.5rem;
    margin-bottom: 12px;
    margin-top: -20px;
  }

  h1 {
    font-family: 'Baloo 2', cursive;
    font-size: 1.25rem;
    font-weight: 700;
    line-height: 130%;
    color: ${({ theme }) => theme.colors['base-subtitle']};
    margin-bottom: 8px;
  }

  p {
    font-size: 0.875rem;
    line-height: 130%;
    color: ${({ theme }) => theme.colors['base-label']};
    text-align: center;
    margin-bottom: 33px;
  }
`
export const ProductTags = styled.div`
    margin-bottom: 16px;
  > span {
    background: ${({ theme }) => theme.colors['brand-yellow-light']};
    color: ${({ theme }) => theme.colors['brand-yellow-dark']};
    padding: 4px 8px;
    border-radius: 100px;
  }
`

export const ProductFooter = styled.div`
  width: 204px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  > span {
    font-size: 0.875rem;
    line-height: 130%;
    color: ${({ theme }) => theme.colors['base-text']};

    strong {
      font-size: 1.5rem;
      font-family: 'Baloo 2', cursive;
      color: ${({ theme }) => theme.colors['base-text']};
    }
  }
`
