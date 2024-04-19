import './App.css'
import Content from './components/Content'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className='bg-[#191b1f] px-10 flex-col justify-center items-center w-full'>
      <Navbar/>
      <Content/>
      <Footer/>
    </div>
  )
}

export default App

