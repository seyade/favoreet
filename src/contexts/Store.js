import React, { createContext, useReducer } from 'react';
import { FETCH_DATA, ADD_FAV, REMOVE_FAV } from './actions';

import { reducer as rootReducer, initialState } from './reducers';

export const Store = createContext();

export const StoreProvider = props => {
  const [state, dispatch] = useReducer(rootReducer, initialState);
  const value = { state, dispatch };

  return <Store.Provider value={value}>{props.children}</Store.Provider>;
};
