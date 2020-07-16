import './App.css';
import Layout from 'Containers/Layout';
import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import { default as configureStore } from 'store';
import { ConfigProvider } from 'antd';
import ruRU from 'antd/es/locale/ru_RU';
import theme from 'UIKit/theme';

const store = configureStore();

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <ConfigProvider locale={ruRU}>
              <Layout />
            </ConfigProvider>
          </BrowserRouter>
        </ThemeProvider>
      </Provider>
    </div>
  );
}

export default App;
