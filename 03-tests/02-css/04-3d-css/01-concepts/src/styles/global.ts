import { createGlobalStyle, GlobalStyleComponent } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body {
        background-color: #222;
        font-family: sans-serif;
        color: #CCC;
    }
    
`;

export default GlobalStyles;
