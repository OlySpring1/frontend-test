//  globalStyles.js
import { createGlobalStyle } from 'styled-components';
import { colors } from './static/colors';
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    /* background-color: ${colors.lightGrey}; */
  }

  p {
    margin: 0;
  }

`;
 
export default GlobalStyle;