import { BrowserRouter, Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Home from './pages/Home'
import AppLandingPage from './components/AppLandingPage'

import './App.css'


function App() {
  return (
    <div className='bg-[#191b1f] flex flex-col justify-center items-center'>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/app" element={<AppLandingPage/>}></Route>
          </Routes>
        </BrowserRouter>
        </div>
    </div>
  )
}

export default App

    

