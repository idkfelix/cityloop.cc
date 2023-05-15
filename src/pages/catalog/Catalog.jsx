import React, { useEffect, useState } from 'react';
import axios from 'axios';
import logo from '../../assets/logo.png';
import ProductGrid from './ProductGrid';
import NavBar from '../../components/NavBar'

function Catalog() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const loadProducts = async () => {
      const res = await axios.get("http://localhost:1337/api/catalog");
      console.log(res);
      setProducts(res.data);
    }
    loadProducts();
  }, []);

  return (
    <body className="catalog">
        <div className="background"></div>
        <div className="centered">
            <a href="/"><img src={logo} alt="Cityloop Logo" className="logo-title"/></a>
            <NavBar/>
        </div>
        <ProductGrid products={products}/>
    </body>
  );
}

export default Catalog