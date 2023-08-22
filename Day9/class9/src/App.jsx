import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Robot from './Robot'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Robot/>
    </>
  )
}

export default App
