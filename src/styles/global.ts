import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${({ theme }) => theme.colors['base-background']};
    color: ${({ theme }) => theme.white};

    -webkit-font-smoothing: antialiased
  }

  body, input, button, textarea {
    font-family: 'roboto', sans-serif;
  }

  a {
    text-decoration: none;
  }

  button, a {
      cursor: pointer;
      transition: filter 0.2s;
  }

  button:hover, a:hover {
      filter: brightness(0.9);
  }`
