import { ThemeProvider } from 'styled-components';
import GlobalStyle from './globalStyles';
import { theme } from './data/styleVariables';
import Router from 'pages/Router';


function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Router />
      </ThemeProvider>
    </>
  );
}

export default App;
