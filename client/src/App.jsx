import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Signup from './Modals/Signup/Signup'
import Login from './Modals/Login/Login'
import Home from './Home'


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/register' element={<Signup />} />
          <Route path='/' element={<Login />} />
          <Route path='/home' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App