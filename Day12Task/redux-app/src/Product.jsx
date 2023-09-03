// Product.js
import React from 'react';
import { connect } from 'react-redux';
import { addToCart, removeFromCart, updateQuantity } from './redux/actions';

const Product = ({ product, addToCart, removeFromCart, updateQuantity, cart }) => {
  const cartItem = cart.find((item) => item.id === product.id);

  const handleAddToCart = () => {
    if (!cartItem) {
      addToCart({ ...product, quantity: 1 });
    } else {
      updateQuantity(product.id, cartItem.quantity + 1);
    }
  };
  return (
    <div className="col-md-6 mb-4">
    <div className="card" style={{ width: '18rem' }}>
      <img src={product.thumbnail} className="card-img-top" alt={product.name} />
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">${product.price}</p>
        <p className="card-text">{product.description}</p>
        {cartItem ? (
          <div>
            <button className="btn btn-danger" onClick={() => removeFromCart(product.id)}>
              Remove from Cart
            </button>
          </div>
        ) : (
          <button className="btn btn-primary" onClick={handleAddToCart}>
            Add to Cart
          </button>
        )}
      </div>
    </div>
  </div>
  );
};

const mapStateToProps = (state) => ({
  cart: state.cart,
});

export default connect(mapStateToProps, { addToCart, removeFromCart, updateQuantity })(Product);
