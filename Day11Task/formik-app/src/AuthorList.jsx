import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';


function AuthorList() {
  const baseURL = 'http://localhost:4000/author';
  
  const authorSchema = Yup.object().shape({
    name: Yup.string().required('Author\'s name is required'),
    dob: Yup.date().required('Date of Birth is required'),
    description: Yup.string(),
  });
  

  const [authorList, setAuthorList] = useState([]);
  const [editAuthorList, setEditAuthorList] = useState(null); // Track the book being edited
  const [formData, setFormData] = useState({
    dob: '',
    name: '',
    description: '',
    
  });

  useEffect(() => {
    axios.get(baseURL).then((response) => {
        setAuthorList(response.data);
    });
  }, []);

  const handleDelete = (id) => {
    axios.delete(`${baseURL}/${id}`).then(() => {
      const updatedAuthorList = authorList.filter((item) => item.id !== id);
      setAuthorList(updatedAuthorList);
    });
  };

  const handleEdit = (author) => {
    setEditAuthorList(author);
    setFormData({
      name: author.name,
      dob: author.dob,
      description: author.description,
      
    });
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleUpdate = () => {
    // Send a PUT request to update the book
    axios
      .put(`${baseURL}/${editAuthorList.id}`, formData)
      .then(() => {
        // Update the book list
        const updatedAuthorList = authorList.map((author) =>
          author.id === editAuthorList.id ? { ...author, ...formData } : author
        );
        setAuthorList(updatedAuthorList);

        // Clear the edit mode
        setEditAuthorList(null);
        setFormData({
          name: '',
          dob: '',
          description: '',
          
        });
      })
      .catch((error) => {
        console.error('Error updating book:', error);
      });
  };

  return (
    <>
      <div>
        <h2>Author List</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Author's Name</th>
              <th scope="col">Date of Birth</th>
              <th scope="col">Bio</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {authorList.map((item, index) => (
              <tr key={item.id}>
                <th scope="row">{index + 1}</th>
                <td>{item.name}</td>
                <td>{item.dob}</td>
                <td>{item.description}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(item.id)}
                  >
                    Delete
                  </button>
                  <button
                    className="btn btn-primary ml-2"
                    onClick={() => handleEdit(item)}
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Edit Form */}
      {editAuthorList && (
      <div>
        <h2>Edit Author Details</h2>
        <Formik
          initialValues={{
            name: editAuthorList.name,
            dob: editAuthorList.dob,
            description: editAuthorList.description || '',
          }}
          validationSchema={authorSchema}
          onSubmit={(values, { setSubmitting }) => {
            // Send a PUT request to update the author
            axios
              .put(`${baseURL}/${editAuthorList.id}`, values)
              .then(() => {
                // Update the author list
                const updatedAuthorList = authorList.map((author) =>
                  author.id === editAuthorList.id ? { ...author, ...values } : author
                );
                setAuthorList(updatedAuthorList);

                // Clear the edit mode
                setEditAuthorList(null);
              })
              .catch((error) => {
                console.error('Error updating author:', error);
              })
              .finally(() => {
                setSubmitting(false);
              });
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className="form-group">
                <label>Author's Name</label>
                <Field
                  type="text"
                  className="form-control"
                  name="name"
                />
                <ErrorMessage name="name" component="div" className="text-danger" />
              </div>
              <div className="form-group">
                <label>Date of Birth</label>
                <Field
                  type="date"
                  className="form-control"
                  name="dob"
                />
                <ErrorMessage name="dob" component="div" className="text-danger" />
              </div>
              <div className="form-group">
                <label>Description</label>
                <Field
                  type="text"
                  className="form-control"
                  name="description"
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary"
                disabled={isSubmitting}
              >
                Update
              </button>
            </Form>
          )}
        </Formik>
      </div>
    )}
  </>
);
}

export default AuthorList;
