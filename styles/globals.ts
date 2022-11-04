import { createGlobalStyle, ThemeProvider } from "styled-components";

const GlobalStyle = createGlobalStyle`

html{
  margin: 0;
  padding: 0;
}

body {
  background-color: #1d1e18;
}
`;

export const theme = {
  colors: {
    primary: "#fafafa",
  },
};

export default GlobalStyle;
