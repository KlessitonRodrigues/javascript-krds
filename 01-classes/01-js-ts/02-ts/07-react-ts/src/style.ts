import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: sans-serif;
    background-color: #222;
    color: #ddd;
  }

  html{
    font-size: 14.5px;
  }

  @media(min-width: 380px){
    html{
      font-size: 15px;
    }
  }

  @media(min-width: 768px){
    html{
      font-size: 15.5px;
    }
  }

  @media(min-width: 1024px){
    html{
      font-size: 16px;
    }
  }
`;

export default GlobalStyle;
