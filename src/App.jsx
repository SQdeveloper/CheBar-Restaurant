import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Render from './components/Render/Render';
import './App.css'
import About from './pages/About/About';

function App() {  

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Render child={<Home/>}/>}/>
        <Route path='/about' element={<Render child={<About/>}/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
