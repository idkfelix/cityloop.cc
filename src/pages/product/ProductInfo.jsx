import React, {useState, useEffect} from 'react';

const ProductInfo = ({ product }) => {

  const [selectedOption, setSelectedOption] = useState();

  // useEffect(() => {
  //   if (product?.options) {
  //     console.log('here');
  //     setSelectedOption();
  //   }
  // }, [product]);

  return (
    <div className="product-info">
        <h1>{product.title}</h1>
        <p className="price">${product.price}</p>
        <h3 className="option-name">Select {product.option_name}</h3>

        <div className="radio-container">
            {product.options?.map((option) => (
              <label key={option._id}
              className={option._id === selectedOption ? 'selected-option' : ''}
              id={option.quantity === 0 ? 'disabled' : ''}
              >
                <input
                type="radio"
                value={option._id}
                onClick={(e) => setSelectedOption(e.target.value)}
                disabled={option.quantity === 0}
                />
                {option.name}
              </label>
            ))}
        </div>
        <form action={`/create-checkout-session/${product.id}`} method="POST">
          <button className="buy-button" onClick={console.log(selectedOption)} type="submit">
            Checkout
          </button>
        </form>
    </div>
  );
};

export default ProductInfo;