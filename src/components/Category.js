import {FaPizzaSlice,FaHamburger} from 'react-icons/fa'
import {GiNoodles,GiChopsticks} from 'react-icons/gi'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

import React from 'react'

function Category() {
  return (
    <List>
        <Slink to ='/cuisine/Italian'>
            <FaPizzaSlice></FaPizzaSlice>
            <h4>Italia</h4>
        </Slink>
        <Slink to ='/cuisine/American'>
            <FaHamburger></FaHamburger>
            <h4>America</h4>
        </Slink>
        <Slink to ='/cuisine/Thai'>
            <GiNoodles></GiNoodles>
            <h4>Thai</h4>
        </Slink>
        <Slink to ='/cuisine/Vietnamese'>
            <GiChopsticks></GiChopsticks>
            <h4>VietNam</h4>
        </Slink>
        
    </List>
  )
}
// styled

const List =styled.div`
  display:flex;
  justify-content:center;
  margin:2rem 0rem
`

const Slink=styled(NavLink)`
  display:flex;
  justify-content:center;
  flex-direction:column;
  align-items:center;
  border-radius:50%;
  margin-right: 2rem;
  text-decoration:none;
  background:linear-gradient(35deg,#494949,#313131);
  width: 6rem;
  height: 6rem;
  cursor: pointer;
  transform: scale(0.8);
  @media (max-width: 601px) {
    min-width: 3rem;
    min-height: 2rem;
    
    margin-right: 1rem;
    svg {
    color:white;
    font-size:0.5rem
  }
  }


  h4{
    color:white;
    font-size: 0.8rem;
  }
  svg {
    color:white;
    font-size:1.5rem
  }
  &.active {
    background: linear-gradient(to right,#f27121,#e94057);
    svg{
      color:white;
    }
  }
`

export default Category