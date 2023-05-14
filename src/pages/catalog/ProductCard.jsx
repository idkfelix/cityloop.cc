import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <a href={`/products/${product.id}`}>
        <img src={product.images[0]} 
        className="product-card-image" 
        alt={product.name} 
        onMouseOver={(e) => {
          e.currentTarget.src = product.images[1];
        }}
        onMouseOut={(e) => {
          e.currentTarget.src = product.images[0];
        }}
        />
      </a>
    </div>
  );
};

export default ProductCard;