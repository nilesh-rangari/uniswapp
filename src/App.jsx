import { BrowserRouter, Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';


import './App.css'
import Home from './pages/Home'
import AppLandingPage from './components/AppLandingPage'
import Pool from './pages/Pool';
import Swap from './pages/Swap';


function App() {
  return (
    <div className='bg-[#191b1f] flex flex-col justify-center items-center'>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/app" element={<AppLandingPage/>}></Route>
            <Route path="/pool" element={<Pool/>}></Route>
            <Route path='/swap'element={<Swap/>} ></Route>
          </Routes>
        </BrowserRouter>
        </div>
    </div>
  )
}

export default App

    

