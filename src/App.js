import React from 'react'
import { BrowserRouter, NavLink, Routes, Route } from 'react-router-dom'

import Greetings from './Greetings'
const App = () => {
  return (
    <>
      <h1>App</h1>
      <BrowserRouter>
        <NavLink to="/">Home</NavLink> <br />
        <NavLink to="/greetings">Greetings</NavLink>
        <Routes>
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="/greetings" element={<Greetings />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App