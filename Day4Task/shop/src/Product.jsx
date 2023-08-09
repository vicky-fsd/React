import React, { useState } from 'react';
import './Cart.css'

const Product = ({ product, onAddToCart, onRemoveFromCart }) => {
  const [isInCart, setIsInCart] = useState(false);

  const handleCartToggle = () => {
    if (isInCart) {
      onRemoveFromCart(product);
    } else {
      onAddToCart(product);
    }
    setIsInCart(!isInCart);
  };
  

  return (
    <div className="col-lg-3 col-md-6 mb-4">
      <div className="card h-100">
       
        <img
          className="card-img-top"
          src={product.image}
          alt={product.name}
        />
        <div className="card-body">
          <h4 className="card-title">{product.name}</h4>
          <p className="card-text">{product.description}</p>
          <h5 className="card-title">{product.price}</h5>
        </div>
        <div className="card-footer">
          <button
            className={`btn btn-${isInCart ? 'danger' : 'primary'}`}
            onClick={handleCartToggle}
          >
            {isInCart ? 'Remove from Cart' : 'Add to Cart'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
