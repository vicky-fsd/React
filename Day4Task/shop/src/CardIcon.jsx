// CartIcon.js
import React from 'react';


const CartIcon = ({ itemCount }) => {
  return (
    <div className="cart-icon">
      <span className="item-count">{itemCount}</span>
    </div>
  );
};

export default CartIcon;
