import React, { useState ,useEffect} from 'react'
import {useParams} from 'react-router-dom'
import styled from 'styled-components'
function Recipe() {
    let params=useParams()
    console.log(params)
    const [details,setDetails]=useState({})
    const [active,setActive]=useState('Instructions')
    const fetchDetails= async (name)=>{
        const data= await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=e61a43e9212a4bc5981c4dca47ea683a`)
        const details= await data.json()
        console.log(details)
        setDetails(details)
        
    }

    useEffect(()=>{
        fetchDetails()
    },[params.name])

  return (
    //   <div>

    <DetailsWrapper>
       <div>
            <h2>{details.title}</h2>
            <img src={details.image}/>
       </div>
        <Info className='info'>
            
            <divButton >
            <Button className={active==='Instructions' ?'active':''} onClick={()=>setActive('Instructions')}>Instructions</Button>
            <Button className={active==='Ingredients' ?'active':''} onClick={()=>setActive('Ingredients')}>Ingredients</Button>

            </divButton>
            {
                active==='Instructions'&& (  <div>
                <h3 dangerouslySetInnerHTML={{__html:details.summary}}>
                    
                </h3>
                <h3 dangerouslySetInnerHTML={{__html:details.instructions}}>
                   
                </h3>
            </div>)
            }
            {/* <div>
                <h3 dangerouslySetInnerHTML={{__html:details.summary}}>
                    
                </h3>
                <h3 dangerouslySetInnerHTML={{__html:details.instructions}}>
                   
                </h3>
            </div> */}
            {
                active==='Ingredients' && (
                    <ul>
               
                {
                    details.extendedIngredients.map(ingredient=>(
                        <li key={ingredient.id}>
                            {ingredient.original}
                        </li>
                    ))
                }

            </ul>
                )
            }
            
            
        </Info>

    </DetailsWrapper>
    //   </div>
  )
}
const DetailsWrapper= styled.div`
    margin-top: 10rem;
    margin-bottom: 5rem;
    display:flex;
    .active {
        background: linear-gradient(35deg,#494949,#313131);
        color:white;

    }
    h2 {
        text-align: center;
        margin-bottom: 1rem;
    }
   
    h3 {
        margin-bottom: 1.2rem;
        font-weight: 500;
    }
    li {
        font-size:1.2rem;
        line-height: 2.5rem,;


    }
    ul {
        margin-top: 2rem;

    }
    @media (max-width:1025px){
        display: flex;
        flex-direction: column;
        .info {
            margin-left: 0;
        }
        h3 {
        margin-bottom: 1.2rem;
        font-weight: 400;
        font-size: 1.1rem;
        }
        img {
        width:100%
        }
    }
`
const Button =styled.button`
    /* padding: 1rem 2rem; */
    color:#313131;
    background-color:white;
    border:2px solid black;
    /* margin-right: 2rem; */
    font-weight: 600;
    padding:1rem 0;
    width: 35%;
   
    
`
const Info=styled.div`
    margin-left:3rem;
    
  
   
`
const divButton=styled.div`
    
    display: flex;
    justify-content: space-between;
`
const Div=styled.div`
 

`
export default Recipe