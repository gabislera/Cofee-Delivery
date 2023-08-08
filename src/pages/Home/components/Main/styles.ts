import styled, { css } from 'styled-components'

export type IconBgVariant = 'orange' | 'yellow' | 'grey' | 'purple'

interface IconProps {
  $variant: IconBgVariant
}

const iconBgVariants = {
  orange: '#C47F17',
  yellow: '#DBAC2C',
  grey: '#574F4D',
  purple: '#8047F8',
}

export const MainContainer = styled.section`
  margin-top: 5.875rem;

  display: flex;
  justify-content: space-between;
`
export const MainSection = styled.div`
  max-width: 36.75rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  > strong {
    font-family: 'Baloo 2', cursive;
    color: ${({ theme }) => theme.colors['base-title']};
    font-size: 3rem;
    font-weight: 800;
    line-height: 130%;
  }

  > span {
    font-size: 1.25rem;
    line-height: 130%;
    color: ${({ theme }) => theme.colors['base-subtitle']};

  }
`

export const IconsSection = styled.div`
  margin-top: 3.125rem;
  display: grid;
  grid-template-columns: auto auto;
  gap: 1.25rem;

  strong {
    color: ${({ theme }) => theme.colors['base-subtitle']};

  }

`

export const Icon = styled.div<IconProps>`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  max-width: fit-content;

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 32px;
    width: 32px;
    border-radius: 50%;

    ${(props) => {
    return css`
        background-color: ${iconBgVariants[props.$variant]};
      `
  }}
  }

  strong {
    font-size: 1rem;
    font-weight: 400;
    line-height: 130%;
  }
`
