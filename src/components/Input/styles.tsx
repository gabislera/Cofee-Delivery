import { css, styled } from "styled-components";

interface InputContainerProps {
  $hasError: boolean
}

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;

  span {
    color: ${({ theme }) => theme.colors['base-error']};
    font-size: 0.875rem;
  }
`

export const DataInput = styled.input<InputContainerProps>`
  padding: 12px;
  background: ${({ theme }) => theme.colors['base-input']};
  border: 1px solid ${({ theme }) => theme.colors['base-button']};
  border-radius: 4px;

  
  ${({ $hasError }) =>
    $hasError &&
    css`
      border-color: ${({ theme }) => theme.colors['base-error']};
    `}
`