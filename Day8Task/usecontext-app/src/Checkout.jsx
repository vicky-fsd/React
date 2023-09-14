import React from 'react'
import { useCart } from './CartContext';

function Checkout() {
    const {totalQuantity, totalAmount } = useCart();
  return (
    <div>
       
         <div style={{ textAlign: "center" }}>
        <p>Total Quantity : {totalQuantity}</p>
        <h6>Total Amount: ${totalAmount}</h6>
        <a href="#" className="btn btn-primary">Proceed to Checkout</a>
        </div>
    </div>
  )
}

export default Checkout