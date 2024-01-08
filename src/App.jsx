// src/App.jsx
import React from 'react';
import './fonts/stylesheet.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Afisha from './Pages/Afisha';
import Home from './Pages/Home';
import Media from './Pages/Media';
import Movies from './Pages/Movies';
import Actors from './Pages/Actors';
import News from './Pages/News';
import Collections from './Pages/Collections';
import Category from './Pages/Category';


const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/afisha' element={<Afisha />} />
        <Route path='/media' element={<Media />} />
        <Route path='/movies' element={<Movies />} />
        <Route path='/actors' element={<Actors />} />
        <Route path='/news' element={<News />} />
        <Route path='/collections' element={<Collections />} />
        <Route path='/category' element={<Category />} />
      </Routes>
    </div>
  );
};

export default App;
