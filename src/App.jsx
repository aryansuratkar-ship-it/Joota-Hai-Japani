import { Search } from "lucide-react"
import Adidashero from "./Components/Adidashero"
import Cards from "./Components/Cards"
import Footer from "./Components/Footer"
import HeroSection from "./Components/HeroSection"
import Navbar from "./Components/Navbar"
import PumaComponent from "./Components/PumaComponent"
import SportType from "./Components/SportType"
import { useState } from "react"
import SearchPage from "./Components/SearchPage"
import { Routes, Route } from "react-router-dom"

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
     <Navbar count={count}/>
    <Routes>

   <Route path='/' element={
    <div className="overflow-x-hidden"> 
      <Navbar count={count}/>
    <HeroSection/>
    <Cards  
     count={count}
     setCount={setCount}/>
   <Adidashero/>
    <PumaComponent/>
   <SportType/>
   <Footer/>
   
   </div>
   }>
     
    
   </Route>
   <Route
    path="/search/:shoeName"
    element={<SearchPage 
     count={count}
      setCount={setCount}
    />}>
   </Route>
   </Routes>
   </>
  )
}

export default App
