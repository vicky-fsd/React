import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Header from './components/Header.jsx'
import Cards from './components/Cards.jsx'
import Footer from './components/Footer.jsx'
import Navbar from './components/Navbar.jsx'
import './shop.css'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <Header /><br></br>
    <div className='container-fluid'>
      < div className='row'>
      <Cards name ="Iphone 14" img ="https://m.media-amazon.com/images/I/61bK6PMOC3L._SX679_.jpg"/>
      <Cards name ="Iphone 14 Plus" img = "https://m.media-amazon.com/images/I/61BGE6iu4AL._SX679_.jpg"/>
      <Cards name ="Iphone 14 Pro" img ="https://m.media-amazon.com/images/I/31MX9scnEzL._SY445_SX342_QL70_FMwebp_.jpg"/>
      <Cards name ="Iphone 14 Pro Max" img="https://m.media-amazon.com/images/I/31DaY6l18YL._SY445_SX342_QL70_FMwebp_.jpg"/>
      <Cards name ="Iphone 13 Mini" img ="https://m.media-amazon.com/images/I/71X6mnUDSzL._SX679_.jpg"/>
      <Cards name ="Iphone 13 " img="https://m.media-amazon.com/images/I/61-r9zOKBCL._SX679_.jpg"/>
      <Cards name ="Iphone 14 Pro" img ="https://rukminim2.flixcart.com/image/312/312/ktketu80/mobile/a/e/g/iphone-13-pro-mlvw3hn-a-apple-original-imag6vpcvspnzyfy.jpeg?q=70" />
      <Cards name ="Iphone 13 Pro Max" img="https://rukminim2.flixcart.com/image/312/312/ktketu80/mobile/r/m/8/iphone-13-pro-max-mllj3hn-a-apple-original-imag6vpgphrzuffg.jpeg?q=70"/>
      </div>
   </div>     
    <Footer />
  </React.StrictMode>,
)
