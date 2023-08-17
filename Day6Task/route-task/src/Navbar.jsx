import React from 'react'


function Navbar() {
  return (
    <div className='container-fulid'>
     <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#"><h2>Guvi</h2></a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="#"><h6>Home </h6><span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="#"><h6>Features</h6></a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="#"><h6>Pricing</h6></a>
          </li>
         
        </ul>
      </div>
    </nav>

    </div>
  )
}

export default Navbar