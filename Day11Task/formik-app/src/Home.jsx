import React from 'react'
import { BrowserRouter as Router , Routes , Link , Route} from'react-router-dom'
import AllBooks from './AllBooks'
import AddBooks from './AddBooks'
import AddAuthor from './AddAuthor'
import Welcom from './Welcom'
import AuthorList from './AuthorList'

function Home() {

  return (
  <>
    <Router>
    <div className='home'>
    <h4><Link to='/'>Home</Link></h4>
    <h4><Link to='/all-books'>All Books</Link></h4>
    <h4><Link to = '/add-books'>AddBook</Link></h4>
    <h4><Link to = '/author-list'> Author List</Link></h4>
    <h4><Link to = '/add-author'>Add Author</Link></h4>
    <a href=''>Logout</a>
     </div>
     <Routes>
     <Route path='/' exact Component={Welcom}></Route>
     <Route path ='/all-books' exact Component={AllBooks}></Route>
     <Route path ='/add-books' exact Component={AddBooks}></Route>
     <Route path ='/author-list' exact Component={AuthorList}></Route>
     <Route path ='/add-author' exact Component={AddAuthor}></Route>
     </Routes>
    </Router>
     </>
     
     
  )
}

export default Home