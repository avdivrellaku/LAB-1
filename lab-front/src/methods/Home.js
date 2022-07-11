import React,{useState,useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import {
  Navbar,
  NavItem,
  Container
} from 'reactstrap';
export const Home = () => {
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

  useEffect(getNews,[]); 
  return (


    <div  style={{width:"1520px"}}>
      <Navbar style={{ marginLeft: 100, width: "100%", }} color='light' className='w-75 d-flex flex-direction-row'>
          <Container style={{width:"90%"}} className='d-flex justify-content-around'>
            <NavItem className='d-flex flex-column justify-content-center'>
              <Link to="/" style={{border:"2px solid black",padding:"5px",borderRadius:"5px",color:"white",backgroundColor:"black"}}   onClick={() => { window.location.href = "/" }}>Home</Link>
            </NavItem>
            <NavItem className='d-flex flex-column justify-content-center'>
              <Link to="/playersHome" style={{border:"2px solid black",padding:"5px",borderRadius:"5px",color:"white",backgroundColor:"black"}}    onClick={() => { window.location.href = "/playersHome" }}>Players</Link>
            </NavItem>
            <NavItem className='d-flex flex-column justify-content-center'>
              <Link to="/teamHome" style={{border:"2px solid black",padding:"5px",borderRadius:"5px",color:"white",backgroundColor:"black"}}    onClick={() => { window.location.href = "/teamHome" }}>Teams</Link>
            </NavItem>
            <NavItem className='d-flex flex-column justify-content-center'>
              <Link to="/gamesHome" style={{border:"2px solid black",padding:"5px",borderRadius:"5px",color:"white",backgroundColor:"black"}}    onClick={() => { window.location.href = "/gamesHome" }}>Games</Link>
            </NavItem>
            <NavItem className='d-flex flex-column justify-content-center'>
              <Link to="/UsersHome" style={{border:"2px solid black",padding:"5px",borderRadius:"5px",color:"white",backgroundColor:"black"}}    onClick={() => { window.location.href = "/UsersHome" }}>Users</Link>
            </NavItem>
            <NavItem className='d-flex flex-column justify-content-center'>
            <Link to="/History"  style={{border:"2px solid black",padding:"5px",borderRadius:"5px",color:"white",backgroundColor:"black"}} onClick={() => { window.location.href = "/History" }}>History</Link>
            </NavItem>
            <NavItem className='d-flex flex-column justify-content-center'>
            <Link to="/HistoryAssists" style={{border:"2px solid black",padding:"5px",borderRadius:"5px",color:"white",backgroundColor:"black"}}    onClick={() => { window.location.href = "/HistoryAssists" }}>History Assists</Link>
            </NavItem>
            <NavItem className='d-flex flex-column justify-content-center'>
            <Link to="/Arenas" style={{border:"2px solid black",padding:"5px",borderRadius:"5px",color:"white",backgroundColor:"black"}}    onClick={() => { window.location.href = "/Arenas" }}>Arenas</Link>
            </NavItem> 

          </Container>

        </Navbar>


    <div className='d-flex flex-row justify-content-evenly flex-wrap'style={{width:"100%"}}>

    {news.map(neww => (
      <div className='d-flex flex-column align-items-center' style={{width:"32%", height:"430px",border:"2px solid black",margin:"5px"}}>
       
        <div style={{height:"65%",width:"100%"}} >
        
        <img src={`images/${neww.imageName}`} style={{height:"100%",width:"100%"}} />
        </div>
        <div style={{width:"100%"}} className='d-flex flex-row align-items-center justify-content-around'>
        <h1 style={{fontSize:"20px"}}>{neww.title}</h1>
        <h1 style={{fontSize:"10px"}}>{neww.datePublished}</h1>
        </div>
        <p>{neww.smallDesc}...</p>
        <Link to={`/readArticle/${neww.id}`} onClick={() => {window.location.href=`/readArticle/${neww.id}`}}>Read More</Link>
      </div>
      ))}
     


    </div>

    </div>



  )

}

