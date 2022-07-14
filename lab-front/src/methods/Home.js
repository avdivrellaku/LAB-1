import React,{useState,useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import authHeader from './auth-header';

import {
  Navbar,
  NavItem,
  Container
} from 'reactstrap';
export const Home = () => {

  const firstName = (localStorage.getItem("firstName"));
  const lastName = (localStorage.getItem("lastName"));


  
  const[news,setNews] = useState([]);  
  function getNews() {
    const url = 'http://localhost:5164/api/News';
    fetch(url,{
      method: 'GET'
    })
    .then(response => response.json())
    .then(newsFromServer => {
      console.log(newsFromServer);
      setNews(newsFromServer);
    })
    .catch((error)=>{
      console.log(error);
      alert(error); 
    })

    
  }

  function logout(){
    localStorage.clear();
    {window.location.href="/"}
  }

  useEffect(getNews,[]); 
  return (


    <div  style={{width:"1520px"}}>
      <Navbar style={{ marginLeft: 100, width: "100%", }} color='light' className='w-75 d-flex flex-direction-row justify-content-between'>
          <Container style={{width:"90%"}} className='d-flex justify-content-around'>
            <NavItem className='d-flex flex-column justify-content-center'>
              <Link to="/" style={{border:"2px solid black",padding:"5px",borderRadius:"2px",color:"white",backgroundColor:"black"}}   onClick={() => { window.location.href = "/" }}>Home</Link>
            </NavItem>
           
            
            <NavItem className='d-flex flex-column justify-content-center'>
            <Link to="/Players" style={{border:"2px solid black",padding:"5px",borderRadius:"2px",color:"white",backgroundColor:"black"}}    onClick={() => { window.location.href = "/Players" }}>Players</Link>
            </NavItem> 
             
            <NavItem className='d-flex flex-column justify-content-center'>
            <Link to="/Teams" style={{border:"2px solid black",padding:"5px",borderRadius:"2px",color:"white",backgroundColor:"black"}}    onClick={() => { window.location.href = "/Teams" }}>Teams</Link>
            </NavItem>
            <NavItem className='d-flex flex-column justify-content-center'>
            <Link to="/ArenasHome" style={{border:"2px solid black",padding:"5px",borderRadius:"2px",color:"white",backgroundColor:"black"}}   onClick={() => { window.location.href = "/ArenasHome" }}>Arenas</Link>
            </NavItem>
            <NavItem className='d-flex flex-column justify-content-center'>
            <Link to="/login" style={{border:"2px solid black",padding:"5px",borderRadius:"2px",color:"white",backgroundColor:"black"}}    onClick={() => { window.location.href = "/login" }}>Login</Link>
            </NavItem> 
            <NavItem className='d-flex flex-column justify-content-center'>
            <Link to="/Profile" style={{padding:"5px",borderRadius:"2px",color:"black"}}    onClick={() => { window.location.href = "/Profile" }}>{firstName}</Link>
            </NavItem>
          
            

            

          </Container>


      

        </Navbar>


    <div className='d-flex flex-row justify-content-evenly flex-wrap'style={{width:"100%"}}>

    {news.map(neww => (
      <div className='d-flex flex-column align-items-center' style={{width:"32%", height:"430px",margin:"5px",padding:"10px",fontFamily:"Calibri"}}>
       
        <div style={{height:"65%",width:"100%"}} >
        
        <img src={`images/${neww.imageName}`} style={{height:"100%",width:"100%"}} />
        </div>
        <div style={{width:"100%"}} className='d-flex flex-row align-items-center justify-content-between'>
        <h1 style={{fontSize:"18px",fontWeight:"bolder",width:"80%"}}>{neww.title}</h1>
        <h1 style={{fontSize:"12px",fontWeight:"bolder"}}>{neww.datePublished}</h1>
        </div>
        <p>{neww.smallDesc}...</p>
        <Link to={`/readArticle/${neww.id}`} onClick={() => {window.location.href=`/readArticle/${neww.id}`}}>Read More</Link>
      </div>
      ))}
     


    </div>

    </div>



  )

}

