import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: Arial, sans-serif;
    background-color: #f9f9f9;
  }

  a {
    color: #0066cc;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
`;

export default GlobalStyle;
