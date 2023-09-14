import axios from "axios";
import React, { useState, useEffect } from "react";

export default function Axi() {
  const baseURL = "https://jsonplaceholder.typicode.com/users";
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPosts(response.data);
    });
  }, []);

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <h1>Name: {post.name}</h1>
          <p>Email: {post.email}</p>
          <p>City: {post.address.city}</p>
        </div>
      ))}
    </div>
  );
}
