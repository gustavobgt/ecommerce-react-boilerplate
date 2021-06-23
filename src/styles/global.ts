import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    
  }
  html, body, #root {
    -webkit-font-smoothing: antialiased;
    scroll-behavior: smooth;
    font-family: 'Roboto', sans-serif;
    font-size:62.5%;
  }
  body, input, button {
    font-family: 'Roboto Slab', serif;
    font-size: 16px;
  }
  h1, h2, h3, h4, h5, h6, p, strong {
    margin: 0;
    font-weight: 500;
  }
  button {
    cursor: pointer;
  }
`;
