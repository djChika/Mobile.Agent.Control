import './App.css';
import Layout from 'Containers/Layout';
import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import configure from 'store';
import theme from 'UIKit/theme';

global.store = configure();

function App() {
  return (
    <div className="App">
      <Provider store={global.store}>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <Layout />
          </BrowserRouter>
        </ThemeProvider>
      </Provider>
    </div>
  );
}

export default App;
