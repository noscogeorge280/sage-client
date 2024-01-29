import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Homepage = ({ onAddFavorite, favorites }) => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await axios.get('https://swapi.dev/api/people/');
        setCharacters(response.data.results);
      } catch (error) {
        console.error('Error fetching characters', error);
      }
    };

    fetchCharacters();
  }, []);

  return (
    <div>
      <h2>Home page</h2>
      <ul class="">
        {characters.map((character) => (
          <li className=' float-right' key={character.url}>
            <Link class="pr-3" to={`/character/${character.url.split('/').reverse()[1]}`}>
              {character.name}
            </Link>
            <button class='btn btn-primary' onClick={() => onAddFavorite(character)}>Add to Favorites</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Homepage;
