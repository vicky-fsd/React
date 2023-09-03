// App.js
import React from 'react';
import './App.css';
import Product from './Product';
import Cart from './Cart';

function App() {
  return (
    <div className='card'>
    <div className="App">
     <div className='pro'>
     <Product product={{ 
        id: 1,
        name: "iPhone 9",
        price: 549,
        description: "An apple mobile which is nothing like apple",
        thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
        }} />
         <Product product={{ 
        id: 2,
        name: "OPPOF19",
        price: 280,
        description: "OPPO F19 is officially announced on April 2021.",
        thumbnail: "https://i.dummyjson.com/data/products/4/thumbnail.jpg"
        }} />
     </div>
      <Cart />
    </div> 
    </div>
  );
}

export default App;
