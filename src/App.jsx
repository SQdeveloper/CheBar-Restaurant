import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Render from './components/Render/Render';
import About from './pages/About/About';
import OurMenu from './pages/Menu/OurMenu';
import TakeAway from './pages/TakeAway/TakeAway';
import './App.css'
import ContactUs from './pages/ContactUs/ContactUs';

function App() {  

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Render child={<Home/>}/>}/>
        <Route path='/about' element={<Render child={<About/>}/>}/>
        <Route path='/menu' element={<Render child={<OurMenu/>} color='black'/>}/>
        <Route path='/take-away' element={<Render child={<TakeAway/>} color='black'/>}/>
        <Route path='/contact-us' element={<Render child={<ContactUs/>}/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
