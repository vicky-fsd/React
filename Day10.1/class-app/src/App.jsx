import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Basic from './SignUpForm'
import SignupForm from './SignUpForm'

function App() {
  const [count, setCount] = useState(0)

  return (
  <>
<SignupForm/>
  </>
  )
}

export default App
