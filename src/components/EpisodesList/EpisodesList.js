import React from 'react';
import Episode from '../Episode';

const EpisodesList = props => {
  const { episodes, favourites, toggleFavAction, dispatch } = props;

  return episodes.map(episode => {
    return (
      <Episode
        episode={episode}
        favourites={favourites}
        toggleFavAction={toggleFavAction}
        dispatch={dispatch}
        key={episode.id}
      />
    );
  });
};

export default EpisodesList;
