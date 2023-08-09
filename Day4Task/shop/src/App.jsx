// App.js
import React, { useState } from 'react';
import Product from './Product';
import Cart from './Cart';
import productsData from './productsData'; 

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const handleRemoveFromCart = (product) => {
    const updatedCart = cartItems.filter((item) => item.id !== product.id);
    setCartItems(updatedCart);
  };

  return (
    <div className="container-fluid">
      <div className="row">
        {productsData.map((product) => (
          <Product
            key={product.id}
            product={product}
            onAddToCart={handleAddToCart}
            onRemoveFromCart={handleRemoveFromCart}
          />
        ))}
        <Cart cartItems={cartItems} onRemoveFromCart={handleRemoveFromCart} />
      </div>
    </div>
  );
};

export default App;
