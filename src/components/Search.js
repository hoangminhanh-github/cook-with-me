import React from 'react'
import styled from 'styled-components'
import {useState} from 'react'
import {FaSearch} from 'react-icons/fa'
import {useNavigate} from 'react-router-dom'
function Search() {
    const navigate=useNavigate()
    const[input,setInput]=useState('')
    const handleSubmit= e=>{
        e.preventDefault()
        navigate('/searched/'+input)
        
    }
  return (
    
        <FormStyle onSubmit={handleSubmit}>
        <div>
            <FaSearch onClick={handleSubmit}/>
            <input type="text"
               onChange={e=>setInput(e.target.value)}
               value={input}

             />

        </div>
        </FormStyle>
    
  )
}
// styled


const FormStyle= styled.form`
    margin: 2rem 20rem;
    
    div{
        width: 100%;
        position: relative;
    }
    @media (max-width:1025px){
        div{
            transform: translateX(-101%);
            width: 18rem;
            position: relative;
        }
    }
    @media (max-width:601px){
        div{
            transform: translateX(-200%);
            width: 10rem;
            position: relative;
        }
    }
    input {
        border:none;
        background: linear-gradient(35deg,#494949,#313131);
        font-size: 1rem;
        color:white;
        padding: 1rem 3rem;
        border: none;
        outline: none;
        border-radius: 1rem;
        width: 100%;
    } 
    svg{
        position: absolute;
        top:50%;
        left:0%;
        transform: translate(100%,-50%);
        color:white;


    }
`
export default Search
