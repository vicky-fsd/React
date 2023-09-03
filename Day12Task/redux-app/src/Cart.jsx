// Cart.js
import React from 'react';
import { connect } from 'react-redux';
import { removeFromCart, updateQuantity, clearCart } from './redux/actions';

const Cart = ({ cart, removeFromCart, updateQuantity, clearCart }) => {
  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
  const totalAmount = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  const handleRemoveFromCart = (productId) => {
    removeFromCart(productId);
  };

  const handleIncreaseQuantity = (productId) => {
    const cartItem = cart.find((item) => item.id === productId);
    updateQuantity(productId, cartItem.quantity + 1);
  };

  const handleDecreaseQuantity = (productId) => {
    const cartItem = cart.find((item) => item.id === productId);
    if (cartItem.quantity > 1) {
      updateQuantity(productId, cartItem.quantity - 1);
    } else {
      removeFromCart(productId);
    }
  };

  return (
    <div className="card" style={{ width: '25rem' }}>
      <div className="card-body">
        <h5 className="card-title">Shopping Cart</h5>
        <ul className="list-group">
          {cart.map((item) => (
            <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
              {item.name} - ${item.price}
             
                <button className="btn btn-outline-danger btn-sm" onClick={() => handleDecreaseQuantity(item.id)}>
                  -
                </button>
                <span className="mx-2">{item.quantity}</span>
                <button className="btn btn-outline-success btn-sm" onClick={() => handleIncreaseQuantity(item.id)}>
                  +
                </button>
                <button className="btn btn-danger btn-sm" onClick={() => handleRemoveFromCart(item.id)}>
                  Remove
                </button>
              
            </li>
          ))}
        </ul>
        <div className="mt-3">
          <button className="btn btn-danger" onClick={clearCart}>
            Clear Cart
          </button>
        </div>
        <div className="mt-3">
          Total Quantity: {totalQuantity}
          <br />
          Total Amount: ${totalAmount}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cart: state.cart,
});

export default connect(mapStateToProps, { removeFromCart, updateQuantity, clearCart })(Cart);
