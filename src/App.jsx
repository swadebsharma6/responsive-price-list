import { useState } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import NavBar from './components/NavBar/NavBar'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <NavBar></NavBar> 
      <Banner></Banner>
    </div>
  )
}

export default App
