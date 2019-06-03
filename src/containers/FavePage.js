import React, { Fragment, Suspense, useContext, lazy } from 'react';
import { Store } from '../contexts/Store';
import { toggleFavAction } from '../contexts/actions';
import LoadingSpinner from '../components/LoadingSpinner';

const EpisodesList = lazy(() => import('../components/EpisodesList'));

const FavPage = () => {
  const { state, dispatch } = useContext(Store);
  const { favourites } = state;

  return (
    <Fragment>
      <Suspense fallback={<LoadingSpinner />}>
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
};

export default FavPage;
