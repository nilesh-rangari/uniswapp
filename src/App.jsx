import { BrowserRouter, Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Home from './pages/Home'
import AppLandingPage from './components/AppLandingPage'

import './App.css'
import Pool from './pages/Pool';


function App() {
  return (
    <div className='bg-[#191b1f] flex flex-col justify-center items-center'>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/app" element={<AppLandingPage/>}></Route>
            <Route path="/pool" element={<Pool/>}></Route>
          </Routes>
        </BrowserRouter>
        </div>
    </div>
  )
}

export default App

    

