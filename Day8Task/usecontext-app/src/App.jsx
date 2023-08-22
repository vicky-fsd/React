// App.js
import React from 'react';
import './App.css';
import { CartProvider } from './CartContext';
import ProductList from './ProductList';
import Cart from './Cart';


function App() {
  return (
    
    <CartProvider>
      <div className="App">
        <ProductList />
        <Cart />
        
      </div>
    </CartProvider>
  );
}

export default App;
