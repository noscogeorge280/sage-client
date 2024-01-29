import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';





const SearchResults = () => {
  const location = useLocation();
  const [searchResults, setSearchResults] = useState([]);
  const searchTerm = new URLSearchParams(location.search).get('query');


  const [characters, setCharacters] = useState([]);
  
    const filterBySearch = async (event) => {
    // Access input value
    const query = event.target.value;
    // Create copy of item list
    try {
      const response = await axios.get(`https://swapi.dev/api/people/?search=${query}`);
      setSearchResults(response.data.results);
    } catch (error) {
      console.error('Error fetching search results', error);
    }
   
    // Trigger render with updated values
   
  };



  useEffect(() => {

    
    const fetchSearchResults = async () => {
      try {
        const response = await axios.get(`https://swapi.dev/api/people/?search=${searchTerm}`);
        setSearchResults(response.data.results);
      } catch (error) {
        console.error('Error fetching search results', error);
      }
    };

    if (searchTerm) {
      console.log("searchTerm ::", searchTerm)
      fetchSearchResults();
    }
  }, [searchTerm]);
 
  return (
    <div>
      <input type="search" value={searchTerm}
        onChange={filterBySearch} class="form-control" placeholder="Search..." aria-label="Search"/>

      <ul>
        {searchResults.map((result) => (
          <li key={result.url}>{result.name}</li>
        ))}
      </ul>


    </div>
  );
};

export default SearchResults;
