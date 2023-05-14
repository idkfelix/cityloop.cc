import React, {useState, useEffect} from 'react';

const ProductInfo = ({ product }) => {

  const [selectedOption, setSelectedOption] = useState();

  useEffect(() => {
    if (product?.options) {
      console.log('here');
      setSelectedOption(product.options[0]?.name);
    }
  }, [product]);

  return (
    <div className="product-info">
        <h1>{product.title}</h1>
        <p className="price">${product.price}</p>
        <h3 className="option-name">Select {product.option_name}</h3>

        <div className="radio-container">
            {product.options?.map((option) => (
            <label key={option.name}
            id={option.name === selectedOption ? 'selected-option' : ''}>
                <input
                type="radio"
                value={option.name}
                onClick={(e) => setSelectedOption(e.target.value)}
                />
                {option.name}
            </label>
            ))}
        </div>

        <button 
        className="buy-button">Buy</button>
    </div>
  );
};

export default ProductInfo;