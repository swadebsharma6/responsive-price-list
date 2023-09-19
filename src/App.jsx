import { useState } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import Footer from './components/Footer/Footer'
import NavBar from './components/NavBar/NavBar'
import PricesFeatures from './components/PricesFeature/PricesFeatures'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <NavBar></NavBar> 
      <Banner></Banner>
      <PricesFeatures></PricesFeatures>
      <Footer></Footer>
    </div>
  )
}

export default App
