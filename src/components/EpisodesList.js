import React from 'react';

function EpisodesList(props) {
  const { episodes, toggleFavAction, favourites } = props;

  return episodes.map(episode => {
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
          <button onClick={() => toggleFavAction(episode)}>
            {favourites.find(fav => fav.id === episode.id) ? (
              <i className="far fa-heart" />
            ) : (
              <i className="fas fa-heart" />
            )}
          </button>
        </div>
      </section>
    );
  });
}

export default EpisodesList;
