import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import dark from './styles/themes/dark'
import light from './styles/themes/light'

import GlobalStyle from './styles/global'
import { Header } from './components/Header';

const App = ()=> {
  const [theme, setTheme] = useState(dark)
  
  const toggleTheme = ()=>{
    setTheme(theme.title === 'light' ? dark : light)
  
  }
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <GlobalStyle />
        <Header toggleTheme={toggleTheme} />
      </div>
    </ThemeProvider>

  );
}
export default App;
