import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import OurFood from './Components/OurFood'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import AboutUs from './Components/AboutUs'
import SignIn from './Components/SignIn'

function App() {


  const [count, setCount] = useState(0);

  const handleCount = ()=>{
    setCount (count+1);
  }
  return (
    <>
    
    <BrowserRouter>
    <Header count ={count}/>
    <Routes>
      <Route path='/' element={<Home handleCount = {handleCount} />}/>
      <Route path='/signIn' element={<SignIn/>}/>
      <Route path='/ourfood' element={<OurFood  handleCount = {handleCount}/>}/>
      <Route path='/AboutUs' element={<AboutUs/>} />
      
    </Routes>
    <Footer/>
    </BrowserRouter>
    
    
    
      
    </>
  )
}

export default App
