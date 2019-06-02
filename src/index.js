import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from '@reach/router';
import App from './containers/App';
import { StoreProvider } from './contexts/Store';

import HomePage from './containers/HomePage';
import FavePage from './containers/FavePage';

import './index.css';

ReactDOM.render(
  <StoreProvider>
    <Router>
      <App path="/">
        <HomePage path="/" />
        <FavePage path="/faves" />
      </App>
    </Router>
  </StoreProvider>,
  document.getElementById('root')
);

/*
deposit 100
rent 170 week
170 x 4 = 680

sc: 122496
acc: 00210704
Rob Brow


67 christchurch street, ipswich
*/
