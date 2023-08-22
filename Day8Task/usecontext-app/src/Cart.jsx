import React from 'react';
import { useCart } from './CartContext';

const Cart = () => {
  const { cart, increaseQuantity, decreaseQuantity, removeFromCart, totalQuantity, totalAmount } = useCart();

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Shopping Cart</h2>

      {cart.map((item) => (
        <div className='ship' key={item.id}>
          <div className="card mb-1">
            <div className="card-body">
              <h4 className="card-title">{item.title}</h4>
              <p className="card-text">Price per item: ${item.price}</p>
              <h6 className="card-text">Quantity: {item.quantity}</h6>
              <button className="btn btn-primary" onClick={() => increaseQuantity(item.id)}>
                +
              </button>

              <button className="btn btn-secondary" onClick={() => decreaseQuantity(item.id)}>
                -
              </button>
              <button className="btn btn-danger" onClick={() => removeFromCart(item.id)}>
                Remove from Cart
              </button>
            </div>
          </div>
        </div>
      ))}
      
      <div style={{ textAlign: "center" }}>
        <p>Total Quantity : {totalQuantity}</p>
        <h6>Total Amount: ${totalAmount}</h6>
        <a href="#" className="btn btn-primary">Proceed to Checkout</a>
      </div>
    </div>
  );
};

export default Cart;
