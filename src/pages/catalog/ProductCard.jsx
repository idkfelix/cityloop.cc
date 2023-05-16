import React from 'react';

const ProductCard = ({ product, server}) => {
  return (
    <div className="product-card">
      <a href={`/products/${product._id}`}>
        <img src={`${server}${product.images[0]}?width=425`} 
        className="product-card-image" 
        alt={product.name} 
        onMouseOver={(e) => {
          e.currentTarget.src = `${server}${product.images[1]}?width=425`;
        }}
        onMouseOut={(e) => {
          e.currentTarget.src =`${server}${product.images[0]}?width=425`;
        }}
        />
      </a>
    </div>
  );
};

export default ProductCard;