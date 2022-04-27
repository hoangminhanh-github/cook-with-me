import React ,{useEffect,useState}from 'react'
import styled from 'styled-components'
import {Splide,SplideSlide} from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/splide.min.css';
import {Link} from 'react-router-dom'
function Popular() {
  // document.addEventListener("DOMContentLoaded", function () {
  //   new Splide(Splide, {
  //     type: "loop",
  //     heightRatio: 0.5,
  //     perPage: 5,
  //     breakpoints: {
  //       1024: {
  //         perPage: 3,
         
  //       },
  //       767: {
  //         perPage: 2,
      
  //       },
  //       640: {
  //         perPage: 1,
    
  //       },
  //     },
  //     focus: "center",
  //     gap: '2em',
  //     updateOnMove : true,
  //     pagination: false,
  //   }).mount();
  // });




  // 
  const [popular,setPopular]=useState([])
  
  useEffect(()=>{
    getPopular()
  },[])
  const getPopular=async ()=>{

    const check=localStorage.getItem('popular')

    if(check){
      setPopular(JSON.parse(check))
    }
    else {
      const api=await fetch(`https://api.spoonacular.com/recipes/random?apiKey=e61a43e9212a4bc5981c4dca47ea683a&number=9`)
      const data= await api.json()
      localStorage.setItem('popular',JSON.stringify(data.recipes))
      setPopular(data.recipes)
      
      console.log(data)
    }


  }
  
  
  return (
    <div>
      <Wrapper>
      <h3>Popular pick</h3>
      <Splide  options={{
            type:'loop',
            perPage:3,
            arrows:'true',
            pagination:'false',
            drag:'free',
            gap:'2rem',
            flickPower: 100,
            autoplay:'true',
            interval:2000,
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
          }
        
            
            
            
          }}>
        {popular.map((recipe,index)=>(
          <SplideSlide key={recipe.id}>
            <Card>
            <Link to={'recipe/'+recipe.id}>
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


export default Popular