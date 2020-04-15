import Layout from 'Containers/Layout';
import 'normalize.css';
import React from 'react';
import { Provider } from 'react-redux';
import configure from 'store';
import './App.css';

const store = configure();

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Layout />
      </Provider>
    </div>
  );
}

export default App;
