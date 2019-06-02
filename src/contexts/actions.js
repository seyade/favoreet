export const FETCH_DATA = 'FETCH_DATA';
export const ADD_FAV = 'ADD_FAV';
export const REMOVE_FAV = 'REMOVE_FAV';

export const fetchDataAction = async dispatch => {
  const query = 'person-of-interest';
  const URL = `https://api.tvmaze.com/singlesearch/shows?q=${query}&embed=episodes`;
  const response = await fetch(URL);
  const data = await response.json();

  return dispatch({
    type: FETCH_DATA,
    payload: data._embedded.episodes,
  });
};

export const toggleFavAction = (episode, favourites, dispatch) => {
  const episodeIsInFavourites = favourites.includes(episode);

  let dispatchData = {
    type: ADD_FAV,
    payload: episode,
  };

  if (episodeIsInFavourites) {
    const favouritesWithoutEpsiode = favourites.filter(
      favourite => favourite.id !== episode.id
    );

    dispatchData = {
      type: REMOVE_FAV,
      payload: favouritesWithoutEpsiode,
    };
  }

  return dispatch(dispatchData);
};
