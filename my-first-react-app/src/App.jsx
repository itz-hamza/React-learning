import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Greetings } from './components/Greetings'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Hello world </h1>
      < Greetings />
    </>
  )
}

export default App
