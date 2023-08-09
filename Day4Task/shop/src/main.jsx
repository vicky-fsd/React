import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Header from './Head.jsx'
import Navbar from '../Navbar.jsx'
import Footer from './Footer.jsx'




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar/><br></br>
    <Header/><br></br>
    <App /><br></br>
    <Footer/>
  </React.StrictMode>,
)
