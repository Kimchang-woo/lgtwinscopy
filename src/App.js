import React from 'react';
import { Routes,Route } from 'react-router-dom';

import Nav from './com/Nav';

import Home from './pages/Home';
import Gg from './pages/Gg';
import Brand from './pages/Brand';
import Player from './pages/Player';
import Rank from './pages/Rank';
import Product from './pages/Product';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Gg' element={<Gg />} />
        <Route path='/Brand' element={<Brand />} />
        <Route path='/Player' element={<Player />} />
        <Route path='/Rank' element={<Rank />} />
        <Route path='/Product/*' element={<Product />} />
      </Routes>
    </div>
  );
}

export default App;
