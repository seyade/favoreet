import React from 'react';
import PropTypes from 'prop-types';
import './Episode.scss';

const Episode = ({ episode, favourites, toggleFavAction, dispatch }) => {
  return (
    <section className="episodes__item" key={episode.id}>
      <img
        src={episode.image.medium}
        alt={`Peson of Interest - ${episode.name}`}
      />
      <div>{episode.name}</div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>
          Season: {episode.season} Number: {episode.number}
        </div>
        <button onClick={() => toggleFavAction(episode, favourites, dispatch)}>
          {favourites.find(fav => fav.id === episode.id) ? (
            <i className="far fa-heart" />
          ) : (
            <i className="fas fa-heart" />
          )}
        </button>
      </div>
    </section>
  );
};

Episode.propTypes = {
  episode: PropTypes.object.isRequired,
  favourites: PropTypes.array.isRequired,
  toggleFavAction: PropTypes.func.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default Episode;
