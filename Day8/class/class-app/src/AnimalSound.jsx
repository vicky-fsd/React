import React, { useContext } from 'react'
import { AnimalContext } from './AnimalContext'

function AnimalSound() {
    const { book } = useContext(AnimalContext);
    const { count } = useContext(AnimalContext);
  return (
    <div>The Book Name is : {book}
    <p>Number of Books Sold : {count}</p>
    </div>
  )
}

export default AnimalSound