import React from 'react';
import PropTypes from 'prop-types';
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

EpisodesList.propTypes = {
  episodes: PropTypes.array.isRequired,
  favourites: PropTypes.array.isRequired,
  toggleFavAction: PropTypes.func.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default EpisodesList;
