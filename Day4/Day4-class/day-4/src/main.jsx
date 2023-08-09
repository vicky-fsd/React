import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import New from './New'
import Home from './Home.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   
    <New />
    <Home />
  </React.StrictMode>,
)
