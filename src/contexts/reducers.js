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
        loading: false,
      };

    case ADD_FAV:
      return {
        ...state,
        favourites: [...state.favourites, action.payload],
        loading: false,
      };

    case REMOVE_FAV:
      return {
        ...state,
        favourites: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};
