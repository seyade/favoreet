import React, { Fragment, Suspense, useContext, useEffect, lazy } from 'react';
import { Store } from '../contexts/Store';
import { fetchDataAction, toggleFavAction } from '../contexts/actions';

const EpisodesList = lazy(() => import('../components/EpisodesList'));

const HomePage = () => {
  const { state, dispatch } = useContext(Store);
  const { episodes, favourites } = state;

  useEffect(() => {
    episodes.length === 0 && fetchDataAction(dispatch);
  });

  return (
    <Fragment>
      <Suspense fallback={<div className="app-ui__loading">Loading...</div>}>
        {console.log(state)}
        <article className="episodes">
          <EpisodesList
            episodes={episodes}
            favourites={favourites}
            toggleFavAction={toggleFavAction}
            dispatch={dispatch}
          />
        </article>
      </Suspense>
    </Fragment>
  );
};

export default HomePage;
