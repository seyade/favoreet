import React, { useContext, useEffect, lazy } from 'react';
import { Store } from '../contexts/Store';
import { FETCH_DATA, ADD_FAV, REMOVE_FAV } from '../contexts/actions';

const EpisodesList = lazy(() => import('../components/EpisodesList'));

export default function HomePage() {
  const { state, dispatch } = useContext(Store);

  const fetchDataAction = async () => {
    const query = 'person-of-interest';
    const data = await fetch(
      `https://api.tvmaze.com/singlesearch/shows?q=${query}&embed=episodes`
    );

    const dataJSON = await data.json();

    dispatch({
      type: FETCH_DATA,
      payload: dataJSON._embedded.episodes,
    });
  };

  const toggleFavAction = episode => {
    const episodeIsInFavourites = state.favourites.includes(episode);
    let dispatchData = {
      type: ADD_FAV,
      payload: episode,
    };

    if (episodeIsInFavourites) {
      const favouritesWithoutEpsiode = state.favourites.filter(
        fav => fav.id !== episode.id
      );
      dispatchData = {
        type: REMOVE_FAV,
        payload: favouritesWithoutEpsiode,
      };
    }

    return dispatch(dispatchData);
  };

  useEffect(() => {
    state.episodes.length === 0 && fetchDataAction();
  });

  const props = {
    episodes: state.episodes,
    favourites: state.favourites,
    toggleFavAction,
  };

  return (
    <React.Fragment>
      <React.Suspense
        fallback={<div className="app-ui__loading">Loading...</div>}
      >
        {console.log(state)}
        <article className="episodes">
          <EpisodesList {...props} />
        </article>
      </React.Suspense>
    </React.Fragment>
  );
}
