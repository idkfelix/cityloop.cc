import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom"
import axios from 'axios'
import logo from '../../assets/logo.png';
import ProductGallery from './ProductGallery';
import ProductInfo from './ProductInfo';
import NavBar from '../../components/NavBar';

const ProductPage = ({server}) => {

  const [product, setProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const loadProducts = async () => {
      const res = await axios.get(`${server}/api/product/${id}`);
      const p = res.data
      setProduct(p);
        }
    loadProducts();
  }, []);

  return (
    <>
      <div className="background"></div>
      <div className="centered">
        <a href="/"><img src={logo} alt="Cityloop Logo" className="logo-title"/></a>
        <NavBar/>
        <div className="product-container">
          <ProductGallery product={product} server={server}/>
          <ProductInfo product={product}/>
        </div>
      </div>
    </>
  );
};

export default ProductPage;