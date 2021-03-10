import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { AppProps } from 'next/app';
import theme from '../styles/theme';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    font-family: 'Lato', sans-serif;
    color: ${theme.colors.contrastText};
  }

  html, body {
    min-height: 100vh;
  }

  #_next {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`;

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default App;
