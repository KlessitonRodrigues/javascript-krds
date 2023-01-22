import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
    }
    
    body {
        font-family: 'Roboto';
        background-color: ${({ theme }) => theme.colors.background};
        color: ${({ theme }) => theme.colors.fontColor};
        width: 100%;
        hidth: 100%;
    }
    
    .scroll{
        /* width */
        &::-webkit-scrollbar {
          width: 4px;
        }
      
        /* Track */
        &::-webkit-scrollbar-track {
          background: #f1f1f1;
        }
      
        /* Handle */
        &::-webkit-scrollbar-thumb {
          background: #8886;
        }
      
        /* Handle on hover */
        &::-webkit-scrollbar-thumb:hover {
          background: #616161;
        }
    }
`
