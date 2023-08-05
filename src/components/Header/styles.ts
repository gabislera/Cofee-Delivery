import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 104px;
  max-width: 70rem;
  margin: 0 auto;

  nav {
    display: flex;
    gap: 0.75rem;
  }
`
export const LocationContainer = styled.header`
  padding: 0.5rem;
  background: ${({ theme }) => theme.colors['brand-purple-light']};
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;

  svg {
    color: ${({ theme }) => theme.colors['brand-purple-dark']};
  }

  span {
    font-family: 'Roboto', sans-serif;
    font-size: 0.875rem;
    color: ${({ theme }) => theme.colors['brand-purple-dark']};
  }
`

export const CartButton = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.colors['brand-yellow-light']};
  border-radius: 6px;
  padding: 0.5rem;
  border: none;

  color: ${({ theme }) => theme.colors['brand-yellow-dark']};

  span {
    position: absolute;
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 50%;
    top: calc(-1.25rem / 2);
    right: calc(-1.25rem / 2);
    color: ${({ theme }) => theme.colors['base-white']};
    background: ${({ theme }) => theme.colors['brand-yellow-dark']};

    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.75rem;
    font-weight: 700;
  }
`
