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
