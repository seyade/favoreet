import React, { Fragment, Suspense, useContext, lazy } from 'react';
import { Store } from '../contexts/Store';
import { toggleFavAction } from '../contexts/actions';

const EpisodesList = lazy(() => import('../components/EpisodesList'));

export default function FavPage() {
  const { state, dispatch } = useContext(Store);
  const { favourites } = state;

  return (
    <Fragment>
      <Suspense fallback={<div className="app-ui__loading">Loading...</div>}>
        {console.log(state)}
        <article className="episodes">
          <EpisodesList
            episodes={favourites}
            favourites={favourites}
            toggleFavAction={toggleFavAction}
            dispatch={dispatch}
          />
        </article>
      </Suspense>
    </Fragment>
  );
}
