import All from './All.jsx'
import './App.css'
import { BrowserRouter as Router , Routes , Link , Route} from'react-router-dom'
import FullStackDevelopment from './FullStackDevelopment.jsx'
import Career from './Career.jsx'
import CyberSecurity from './CyberSecurity.jsx'
import DataScience from './DataScience.jsx'
import Images from './Images/2.png'


function App() {
  

  return (
  <>
  <Router>
  
      <img className='img' src={Images} alt="My Image" />
      
     <div>
     <ul className='list'>
               <ol><Link className='li' to ="/">ALL</Link></ol>
              <ol><Link className='li' to ="/fullstackdevelopment">FULL STACK DEVELOPMENT</Link></ol>
              <ol><Link className='li' to ="/datascience">DATA SCIENCE</Link></ol>
              <ol><Link className='li' to ="/cybersecurity">CYBER SECURITY</Link> </ol>
              <ol><Link className='li' to = "/career">CAREER</Link></ol>        
      </ul>
      <Routes>
        <Route path='/' exact Component={All}></Route>
        <Route path='/fullstackdevelopment' exact Component={FullStackDevelopment}></Route>
        <Route path='/career' exact Component={Career}></Route>
        <Route path='/cybersecurity' exact Component={CyberSecurity}></Route>
        <Route path='/datascience' exact Component={DataScience}></Route>
      </Routes>
     </div>
  
      </Router>
  </>
   
  )
}

export default App
