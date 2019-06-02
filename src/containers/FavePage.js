import React, { useContext, lazy } from 'react';
import { Store } from '../contexts/Store';
import { ADD_FAV, REMOVE_FAV } from '../contexts/actions';

const EpisodesList = lazy(() => import('../components/EpisodesList'));

export default function FavPage() {
  const { state, dispatch } = useContext(Store);

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

  const props = {
    episodes: state.favourites,
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
