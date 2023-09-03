import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; // Import Provider
import store from './redux'; // Import your Redux store
import App from './App';
import Header from './Header';


ReactDOM.render(
  <Provider store={store}>
    <Header/>
    <App />
  </Provider>,
  document.getElementById('root')
);
