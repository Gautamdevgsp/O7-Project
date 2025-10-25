import { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import User from './User'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<User/>}></Route>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
