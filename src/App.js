import React from "react";
import Home from "./pages/Home";
import Pages from "./pages/Pages";
import Category from "./components/Category";
import Search from "./components/Search";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation
} from 'react-router-dom';
import './index.css'
import styled from 'styled-components'
import {GiKnifeFork} from 'react-icons/gi'

function App() {
  
  return (
    
    <Router >
      <div className="App">
      <Nav>
        <GiKnifeFork></GiKnifeFork>
        <Logo to='/'>Delicious</Logo>
      </Nav>
      <Search></Search>
      <Category/>
      <Pages></Pages>
      {/* <Test></Test> */}
      </div>

    </Router>
   
  )
}

const Logo= styled(Link)`
    text-decoration: none;
    font-size: 1.5rem;
    font-weight: 400;
    font-family: 'Babylonica', cursive;
    color: #363636;

`
const Nav=styled.div`
  padding:2rem 0 1rem 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  svg{
    font-size: 2rem;
  }
`
export default App;
