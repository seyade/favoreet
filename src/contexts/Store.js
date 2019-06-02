import React, { createContext, useReducer } from 'react';

export const FETCH_DATA = 'FETCH_DATA';
export const ADD_FAV = 'ADD_FAV';
export const REMOVE_FAV = 'REMOVE_FAV';

export const Store = createContext();

const initialState = {
  episodes: [],
  favourites: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...state,
        episodes: action.payload,
      };

    case ADD_FAV:
      return {
        ...state,
        favourites: [...state.favourites, action.payload],
      };

    case REMOVE_FAV:
      return {
        ...state,
        favourites: action.payload,
      };

    default:
      return state;
  }
};

export const StoreProvider = props => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };

  return <Store.Provider value={value}>{props.children}</Store.Provider>;
};
