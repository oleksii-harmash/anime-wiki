import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import AnimeCard from './components/AnimeCard';
import Main from './components/Main';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />}/>
        <Route path='/anime/:anime_id' element={<AnimeCard />} />
        {/* <Route path="/character/:id" element={<Gallery />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
