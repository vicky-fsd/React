import React, { useEffect, useState } from "react";
import { useCart } from "./CartContext";

const ItemList = () => {
  const { dispatch } = useCart();
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Fetch items from your JSON data source (replace with your actual API call)
    // For this example, we're using a static JSON file
    fetch("data.json")
      .then((response) => response.json())
      .then((data) => setItems(data))
      .catch((error) => console.error("Error fetching data: ", error));
  }, []);

  const handleAddToCart = (item) => {
    dispatch({ type: "ADD_TO_CART", payload: item });
  };

  return (
    <div>
      <h2>Item List</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price}{" "}
            <button onClick={() => handleAddToCart(item)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
