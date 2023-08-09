import React from 'react';


const Cart = ({ cartItems, onRemoveFromCart }) => {
  return (
    <div className="col-lg-3 mt-5px">
      <h1 className="my-4">Cart 🛒</h1>
      <ul className="list-group">
        {cartItems.map((item) => (
          <li key={item.id} className="list-group-item">
            {item.name}
            <button
              className="btn btn-sm btn-danger float-right"
              onClick={() => onRemoveFromCart(item)}
            >
              Remove
            </button>
            
          </li>
          
        ))}
        <a href="#"><button className='btn'>Proceed to Checkout</button></a>
      </ul>
      
    </div>
  );
};

export default Cart;
