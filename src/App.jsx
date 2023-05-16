import React from 'react';
import { Route, Routes } from "react-router-dom";
import './App.css';
import Home from './pages/home/Home';
import Catalog from './pages/catalog/Catalog';
import ProductPage from './pages/product/ProductPage';
import ComingSoon from './pages/comingSoon/ComingSoon';

function App() {

  const server = "http://localhost:1337"

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/catalog" element={<Catalog server={server}/>} />
      <Route path="/stores" element={<ComingSoon />} />      
      <Route path="/products/:id" element={<ProductPage server={server}/>} />
    </Routes>
  );
}

export default App