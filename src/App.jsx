import React, { useContext } from 'react'
import Home from './pages/Home'
import Result from './pages/Result'
import BuyCredit from './pages/BuyCredit'
import {Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Login from './components/Login'
import { AppContext } from './context/AppContext'
import { ToastContainer } from 'react-toastify';
import BgGradient from './pages/BgGradient'

const App = () => {

  const{showLogin} =  useContext(AppContext);

  return (
     <div className='px-4 sm:px-10 md:px-14 lg:px-28 min-h-screen '>
      <ToastContainer position='bottom-right' />
      <BgGradient/>
      <Navbar/>
      {showLogin && <Login/> }
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/result' element={<Result/>}/>
        <Route path='/buy' element={<BuyCredit/>}/>
      </Routes>
      <Footer/>
     </div>
  )
}

export default App