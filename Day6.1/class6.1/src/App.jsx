import './App.css'
import { BrowserRouter as Router , Routes , Link , Route} from'react-router-dom'
import Contact from './Contact'
import Home from './Home'
import About from './About'
import Animal from './Animal'

function App() {
  

  return (
    <>
    <Router>
      <div>
        <navbar>
          <ul>
            {/* <li> <Link to="/">Home</Link></li>
            <li> <Link to="/about">About</Link></li>
            <li> <Link to="/contact">Contact</Link></li> */}
             <li> <Link to="/animal/dog">Dog</Link></li>
            <li> <Link to="/animal/cat">Cat</Link></li>
            <li> <Link to="/animal/rabbit">Rabbit</Link></li>
          </ul>
        </navbar>
        <Routes>
          {/* <Route path='/' exact Component={Home}></Route>
          <Route path='/about' exact Component={About}></Route>
          <Route path='/contact' exact Component={Contact}></Route> */}
           <Route path='/animal/:name' Component={Animal}></Route>
        </Routes>
      </div>
    </Router>
    </>
  
  )
}

export default App
