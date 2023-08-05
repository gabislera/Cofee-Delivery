import { css, styled } from "styled-components";

export type IconBgVariant = 'orange' | 'yellow' | 'purple'

interface IconProps {
  variant: IconBgVariant
}

const iconBgVariants = {
  orange: '#C47F17',
  yellow: '#DBAC2C',
  purple: '#8047F8',
}

export const SuccessContainer = styled.main`
  max-width: 70rem;
  margin: 80px auto 0;
  display: flex;
  gap: 2rem;
  justify-content: space-between;

  img {
    align-self: flex-end;
    margin-bottom: -14px;
  }
`

export const SuccessSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  > div {
      display: flex;
      flex-direction: column;

    > strong {
        font-family: 'Baloo 2', cursive;
        color: ${({ theme }) => theme.colors['brand-yellow-dark']};
        font-size: 2rem;
        font-weight: 800;
        line-height: 130%;

      }
    
      > span {
          font-family: 'Roboto', sans-serif;
          color: ${({ theme }) => theme.colors['base-subtitle']};
          font-size: 1.25rem;
          font-weight: 400;
          line-height: 130%;
      }
  }
`

export const GradientContainer = styled.div`
  background: linear-gradient(102.89deg, #dbac2c 2.61%, #8047f8 98.76%);
  border-radius: 6px 36px;
  padding: 1px;
`

export const IconsContainer = styled.div`
  max-width: 32.875rem;
  padding: 2.5rem;
  border-radius: 6px 36px;
  background: ${({ theme }) => theme.colors['base-background']};

  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export const IconSection = styled.div<IconProps>`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  max-width: fit-content;

  div {
    display: flex;
    flex-direction: column;
  }

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 32px;
    width: 32px;
    border-radius: 50%;

    ${(props) => {
    return css`
        background-color: ${iconBgVariants[props.variant]};
      `
  }}
  }

  h2 {
    font-family: 'Roboto', sans-serif;
    color: ${({ theme }) => theme.colors['base-text']};
    font-size: 1rem;
    font-weight: 400;
    line-height: 130%;
  }
`
