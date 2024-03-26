import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Render from './components/Render/Render';
import './App.css'

function App() {  

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Render child={<Home/>}/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
