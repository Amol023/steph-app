import React from 'react';
import Homepage from './components/Homepage';
import { ThemeProvider } from 'emotion-theming'
import theme from './theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
        <header className="App-header">
        </header>
        <Homepage />
    </ThemeProvider>
  );
}

export default App;
