import React, { createContext, useReducer } from 'react';
import { reducer as rootReducer, initialState } from './reducers';

export const Store = createContext();

export const StoreProvider = props => {
  const [state, dispatch] = useReducer(rootReducer, initialState);
  const value = { state, dispatch };

  return <Store.Provider value={value}>{props.children}</Store.Provider>;
};
