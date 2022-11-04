import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import GlobalStyle, { theme } from "../../styles/globals";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
