import { createGlobalStyle, css } from "styled-components";

export default createGlobalStyle(
  (props) => css`
    * {
      margin: 0;
      padding: 0;
      outline: 0;
      box-sizing: border-box;
      font-weight: normal;
    }
    html {
      font-size: 16px;
    }
    body {
      font-size: 16px;
    }
    html,
    body {
      font-family: "Roboto", sans-serif;
      background-color: #222;
      color: #ddd;
    }
  `
);
