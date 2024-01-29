import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const CharacterDetails = ({ favorites, onAddFavorite, onRemoveFavorite }) => {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    const fetchCharacterDetails = async () => {
      try {
        const response = await axios.get(`https://swapi.dev/api/people/${id}/`);
        setCharacter(response.data);
      } catch (error) {
        console.error('Error fetching character details', error);
      }
    };

    fetchCharacterDetails();
  }, [id]);

  if (!character) {
    return <div>Loading...</div>;
  }

  const isFavorite = favorites.some((fav) => fav.id === id);

  return (
    <div>
      {{character}}
      <h2 className='h2'>{character.name}</h2>
      <p>Height: {character.height}</p>
      <p>Mass: {character.mass}</p>
      {/* Add more details as needed */}
      {isFavorite ? (
        <button class='btn btn-danger btn-sm' onClick={() => onRemoveFavorite(id)}>Remove from Favorites</button>
      ) : (
        <button class='btn btn-primary btn-sm' onClick={() => onAddFavorite(character)}>Add to Favorites</button>
      )}
    </div>
  );
};

export default CharacterDetails;
