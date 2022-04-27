import React from 'react'
import Home from './Home'
import Cuisine from '../components/Cuisine';
import Recipe from '../components/Recipe';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation
} from 'react-router-dom';
import Searched from '../components/Searched';
import {AnimatePresence} from 'framer-motion'

function Pages() {
  const location=useLocation()
  return (
    <AnimatePresence>
      <Routes Location={location} key={location.pathname}>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/cuisine/:type' element={<Cuisine/>}></Route>
      <Route path='/searched/:search' element={<Searched/>}></Route>
      <Route path='recipe/:name' element={<Recipe/>}></Route>
      </Routes>
      </AnimatePresence>
    
  )
}

export default Pages