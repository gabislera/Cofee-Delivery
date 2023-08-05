import styled from 'styled-components'

export const HomeContainer = styled.main`
  max-width: 70rem;
  margin: 0 auto;
`
export const ProductsContainer = styled.section`
  margin-top: 8.75rem;
  max-width: 70rem;
  margin-bottom: 10rem;

  strong {
    font-family: 'Baloo 2', cursive;
    font-size: 2rem;
    font-weight: 800;
    line-height: 130%;
    color: ${({ theme }) => theme.colors['base-title']};
  }
`
export const ProductsSection = styled.div`
  display: flex;
  gap: 32px;
  flex-wrap: wrap;
`
