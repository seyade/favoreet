import { FETCH_DATA, ADD_FAV, REMOVE_FAV } from './actions';

export const initialState = {
  episodes: [],
  favourites: [],
  loading: true,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...state,
        episodes: action.payload,
        loading: true,
      };

    case ADD_FAV:
      return {
        ...state,
        favourites: [...state.favourites, action.payload],
        loading: true,
      };

    case REMOVE_FAV:
      return {
        ...state,
        favourites: action.payload,
        loading: true,
      };

    default:
      return state;
  }
};
