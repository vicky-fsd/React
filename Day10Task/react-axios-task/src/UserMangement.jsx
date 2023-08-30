import React, { useState, useEffect } from "react";
import axios from "axios";

function User() {
  const baseURL = "https://jsonplaceholder.typicode.com/users";
  const [posts, setPosts] = useState([]);
  const [newUser, setNewUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
  });
  const [editingUser, setEditingUser] = useState(null);
  const [originalEditingUser, setOriginalEditingUser] = useState(null);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPosts(response.data);
    });
  }, []);

  const handleAddUser = () => {
    axios.post(baseURL, newUser).then((response) => {
      setPosts([...posts, response.data]);
      setNewUser({
        name: "",
        username: "",
        email: "",
        phone: "",
        website: "",
      });
    });
  };

  const handleEditUser = () => {
    if (!editingUser) return;

    axios.put(`${baseURL}/${editingUser.id}`, editingUser).then(() => {
      const updatedPosts = posts.map((post) =>
        post.id === editingUser.id ? editingUser : post
      );
      setPosts(updatedPosts);
      setEditingUser(null);
    });
  };

  const handleDeleteUser = (id) => {
    axios.delete(`${baseURL}/${id}`).then(() => {
      const updatedPosts = posts.filter((post) => post.id !== id);
      setPosts(updatedPosts);
    });
  };

  const cancelEdit = () => {
    setEditingUser(null);
    if (editingUser) {
      // Reset editingUser back to its original state
      setEditingUser(originalEditingUser);
    }
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
    gap: "20px",
  };

  return (
    <>
      <div>
        <h1>User Management</h1>
        <br></br>
      </div>
      <div>
        <div className="input">
          {editingUser ? (
            // Render the edit form when editingUser is not null
            <div>
              <h2>Edit User</h2>
              <input
                type="text"
                placeholder="Name"
                value={editingUser.name}
                onChange={(e) =>
                  setEditingUser({ ...editingUser, name: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="Username"
                value={editingUser.username}
                onChange={(e) =>
                  setEditingUser({ ...editingUser, username: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="Email"
                value={editingUser.email}
                onChange={(e) =>
                  setEditingUser({ ...editingUser, email: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="Phone"
                value={editingUser.phone}
                onChange={(e) =>
                  setEditingUser({ ...editingUser, phone: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="Website"
                value={editingUser.website}
                onChange={(e) =>
                  setEditingUser({ ...editingUser, website: e.target.value })
                }
              />
              <button className="btn btn-primary" onClick={handleEditUser}>
                Save
              </button>
              <button className="btn btn-primary" onClick={cancelEdit}>
                Cancel
              </button>
            </div>
          ) : (
            // Render the add user form when editingUser is null
            <div>
              <h2>Add User</h2>
              <input
                type="text"
                placeholder="Name"
                value={newUser.name}
                onChange={(e) =>
                  setNewUser({ ...newUser, name: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="Username"
                value={newUser.username}
                onChange={(e) =>
                  setNewUser({ ...newUser, username: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="Email"
                value={newUser.email}
                onChange={(e) =>
                  setNewUser({ ...newUser, email: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="Phone Number"
                value={newUser.phone}
                onChange={(e) =>
                  setNewUser({ ...newUser, phone: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="Website"
                value={newUser.website}
                onChange={(e) =>
                  setNewUser({ ...newUser, website: e.target.value })
                }
              />
              <button className="btn btn-primary" onClick={handleAddUser}>
                Submit
              </button>
            </div>
          )}
        </div>
      </div>
      <br></br>
      <div>
        <div style={gridStyle}>
          {posts.map((post) => (
            <div key={post.id} className="card">
              <div className="card-body">
                <h5 className="card-title">Name : {post.name}</h5>
                <p className="card-text">Username : {post.username}</p>
                <p className="card-text">Email : {post.email}</p>
                <p className="card-text">Phone : {post.phone}</p>
                <p className="card-text">Website : {post.website}</p>
                <div className="btnt">
                  <button
                    className="btn btn-warning"
                    onClick={() => setEditingUser(post)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDeleteUser(post.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default User;
