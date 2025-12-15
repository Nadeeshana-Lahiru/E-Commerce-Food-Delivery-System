import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route , Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Footer from './components/Footer/Footer'
import LoginPopup from './components/LoginPopup/LoginPopup'

const App = () => {

  // show the login-popup using useState
  const [showLogin, setShowLogin] = useState(false)

  return (
    <>
    {showLogin?<LoginPopup setShowLogin={setShowLogin} />:<></>}
      <div className='app'>
        <Navbar setShowLogin={setShowLogin} />
        {/* set up the routes */}
        <Routes>
          {/* give the path and element where need to go */}
          < Route path='/' element={<Home/>} />
          < Route path='/cart' element={<Cart/>} />
          < Route path='/order' element={<PlaceOrder/>} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App