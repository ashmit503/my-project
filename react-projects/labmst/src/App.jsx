import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Orders from "./components/Orders"; 

function App() {
  const [count, setCount] = useState(0)

  return (
   
   <div>
    <h1>orders app</h1>
    <Orders/>
   </div>
  )
}

export default App
