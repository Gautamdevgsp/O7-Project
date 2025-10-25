import { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import User from './User'
import Services from './Services';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<User/>}></Route>
      <Route path='/services' element={<Services/>}></Route>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
