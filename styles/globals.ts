import { createGlobalStyle, ThemeType } from "styled-components";

const GlobalStyle = createGlobalStyle<{ theme: ThemeType }>`

html{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Lato', sans-serif
}

body {
  background-color: ${({ theme }) => theme.colors.background};
}
`;

export const theme = {
  colors: {
    background: "#1D1E18",

    gradient: "rgba(71, 115, 167), rgba(22,219, 101), rgba(149, 239, 186)",

    button: "#16DB65",

    menu_background: "#D9D9D9",
  },
};

export default GlobalStyle;
