import React, { useEffect, useState } from 'react';
import axios from 'axios';
import logo from '../../assets/logo.png';
import ProductGrid from './ProductGrid';
import NavBar from '../../components/NavBar'

function Catalog({server}) {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const loadProducts = async () => {
      const res = await axios.get(`${server}/api/catalog`);
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
        <ProductGrid products={products} server={server}/>
    </body>
  );
}

export default Catalog