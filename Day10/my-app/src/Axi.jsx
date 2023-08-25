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
    <div style={gridStyle}>
    {posts.map((post) => (
      <div key={post.id} className="card" style={{ width: "20rem" }}>
        <div className="card-body">
          <h5 className="card-title">Name : {post.name}</h5>
          <p className="card-text">Username : {post.username}</p>
          <p className="card-text">Email : {post.email}</p>
          <p className="card-text">Address :</p>
          <p className="card-text">{post.address.suite}</p>
          <p className="card-text">{post.address.street}</p>
          <p className="card-text">{post.address.city}</p>
          <p className="card-text">Zipcode : {post.address.zipcode}</p>
          <p className="card-text">Phone : {post.phone}</p>
          <p className="card-text">Website : {post.website}</p>
        </div>
      </div>
    ))}
  </div>
  );
}
