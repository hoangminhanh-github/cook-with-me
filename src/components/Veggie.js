import React ,{useEffect,useState}from 'react'
import styled from 'styled-components'
import {Splide,SplideSlide} from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/splide.min.css';
import {Link } from 'react-router-dom'
function Veggie() {
  const [veggie,setVeggie]=useState([])
  
  useEffect(()=>{
    getVeggie()
  },[])
  const getVeggie=async ()=>{

    const check=localStorage.getItem('veggie')

    if(check){
      setVeggie(JSON.parse(check))
    }
    else {
      const api=await fetch(`https://api.spoonacular.com/recipes/random?apiKey=e61a43e9212a4bc5981c4dca47ea683a&number=9&tags=vegetarian`)
      const data= await api.json()
      localStorage.setItem('veggie',JSON.stringify(data.recipes))
      setVeggie(data.recipes)
      
      console.log(data)
    }


  }
  
  
  return (
    <div>
      <Wrapper>
      <h3 style={{marginBottom:'1rem'}}>Veggie food</h3>
      <Splide options={{
            type:'loop',
            perPage:4,
            arrows:'true',
            pagination:'false',
            drag:'free',
            gap:'3rem',
            flickPower: 100,
            autoplay:'true',
            interval:3000,
            pauseOnFocus : 'false',
            pauseOnHover:'true',
            breakpoints: {
            1024: {
              perPage: 2,
             
            },
            767: {
              perPage: 1,
          
            },
            640: {
              perPage: 1,
        
            },
          }}}>
        {veggie.map((recipe,index)=>(
          <SplideSlide >
            <Card Link to={'recipe/'+recipe.id}>
            <Link to ={'recipe/'+recipe.id}>
              <p>{recipe.title}</p>
              <img src={recipe.image} alt={recipe.title}></img>
              <Gradient></Gradient>

            </Link>
            </Card>
          </SplideSlide>
        ))}

      </Splide>
      </Wrapper>

    </div>

   
  )
}

// styled component
const Wrapper=styled.div`
  margin:4rem 0rem;
  
  
  `
const Card= styled.div`
  min-height:15rem;
  min-width: 12rem;
  border-radius:2rem;
  overflow: hidden;
  position:relative;

    img {
        border-radius:2rem;
        position:absolute;
        left:0;
        width:100%;
        height:100%;
        object-fit:cover;
        margin: auto;

    }
    p{
      position:absolute;
      z-index:10;
      left:50%;
      bottom:0%;
      transform:translate(-50% , 0%);
      color:white;
      width:100%;
      text-align:center;
      font-weight:600;
      font-size:1rem;
      height:40%;
      display:flex;
      justify-content:center;
      align-items: center;

    }
    
`
const Gradient=styled.div`
  z-index: 3;
  position:absolute;
  width:100%;
  height:100%;
  background:linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.5));

`



export default Veggie