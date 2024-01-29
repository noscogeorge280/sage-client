import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({ favorites, onRemoveFavorite }) => {
  return (
    <div>
      <h2>Favorites</h2>
      <ul>
        {favorites.map((favorite) => (
          <li key={favorite.id}>
            <Link to={`/character/${favorite.id}`}>{favorite.name}</Link>
            <button onClick={() => onRemoveFavorite(favorite.id)}>
              Remove from Favorites
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
