import React from 'react';
import ProductCard from './ProductCard';

const ProductGrid = ({ products,server }) => {
  return (
    <div className="centered">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} server={server}/>
      ))}
    </div>
  );
};

export default ProductGrid;
