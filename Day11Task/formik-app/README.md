# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Library Admin Dashboard Application

This is a simple web application for managing a list of books and author. It allows you to view, create, edit, and delete books/author from a local JSON server. The application is built using React, Axios for HTTP requests, Formik for form management, and Yup for form validation.

## Features

- View a list of books.
- Create a new book entry.
- Edit existing book entries.
- Delete book entries.

## Getting Started


Before you start, ensure you have the following installed:

- [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) (Node Package Manager) to run the application.
#### commands

the following commands are in `command` format, kindly enter this command in you terminal. 

#### Installation

1. Clone this repository:

  - git clone <repository-url>

   - `cd formik-app`

   - `npm install axios`
   - `npm install formik yup`

2. Setting Up the Local JSON Server
This application uses a local JSON server to store and retrieve book data. Follow these steps to set up the JSON server:

3. Install json-server globally:

    - `npm install -g json-server`
    - find the db.json file in the application
4. Start the JSON server:

    - command `json-server --watch db.json --port 4000` in your terminal
    - The server should now be running at http://localhost:4000.
5. Running the Application
    - Run `npm run dev` from your terminal or command line to launch the app!
6. Usage
    - View the list of books/author on the main page.
    - Click the "Create" button to add a new book/author to the list.
    - Click the "Edit" button on a book/author entry to edit its details.
    - Click the "Delete" button on a book/author entry to remove it from the list.


