import React, { useContext } from 'react'
import { AnimalContext } from './AnimalContext'

function ChangeSound() {
    const { setBookName } = useContext(AnimalContext);
    const { setCount } = useContext(AnimalContext);


    const changeSound = (newSound) => {
        setBookName(newSound);
    }
    const changeAge = (newAge) => {
        setCount(newAge);
    }
  return (
    <>
    <button onClick={() => changeSound('The Matrix')}>Books</button>
    
    <button onClick={() => setCount((count) => count + 1)}>Count</button>
    </>
  )
}

export default ChangeSound
