import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/layout/header';
import Sidebar from './components/layout/sidebar';
import Homepage from './components/home/homepage';
import CharacterDetails from './components/home/characterdetails';
import SearchResults from './components/layout/searchresults';

const App = () => {
  const [favorites, setFavorites] = useState([]);

  const handleSearch = (searchTerm) => {
    // You can implement search functionality here
  };

  const handleAddFavorite = (character) => {
    setFavorites((prevFavorites) => [...prevFavorites, character]);
  };

  const handleRemoveFavorite = (characterId) => {
    setFavorites((prevFavorites) => prevFavorites.filter((fav) => fav.id !== characterId));
  };
  return (
    <Router>
      <div>
        <Header onSearch={handleSearch} />
        <Sidebar favorites={favorites} onRemoveFavorite={handleRemoveFavorite} />
        <Routes>
          <Route exact path='/' element={<Homepage onAddFavorite={handleAddFavorite} favorites={favorites} />}  />
          <Route path="/character/:id"  element={<CharacterDetails  favorites={favorites} onAddFavorite={handleAddFavorite} onRemoveFavorite={handleRemoveFavorite} />}>
            
          </Route>
          <Route path="/search" component={SearchResults} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
