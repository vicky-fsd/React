import React, { useState, useEffect } from "react";
import axios from "axios";

function User() {
  const baseURL = "http://localhost:4000/books";
  const [posts, setPosts] = useState([]);
  const [newUser, setNewUser] = useState({
    title: '',
    author: '',
    isbn: '',
    publicationdate: '',
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
        title: '',
        author: '',
        isbn: '',
        publicationdate: '',
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

  return (
    <>
    
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
      <div >
        <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Book Title</th>
      <th scope="col">Author</th>
      <th scope="col">ISBN</th>
      <th scope="col">Publication Date</th>
    </tr>
  </thead>
  {allBooks.map((item) => (
  <tbody key={item.id}>
    <tr>
      <th scope="row">1</th>
      <td>{item.title}</td>
      <td>{item.author.name}</td>
      <td>{item.isbn}</td>
      <td>{item.publicationdate}</td>
    </tr>
  </tbody>
   ))}
</table>
    </div>
      </div>
    </>
  );
}

export default User;
