import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Navbar,
  NavbarBrand,
  NavItem,
  Nav,
  Container
} from 'reactstrap';


export const ArenasHome = () => {
  const [arenas, setArenas] = useState([]);
  function getArenas() {
    const url = 'http://localhost:5164/api/Arenas';
    fetch(url, {
      method: 'GET'
    })
      .then(response => response.json())
      .then(arenasFromServer => {
        console.log(arenasFromServer);
        setArenas(arenasFromServer);
      })
      .catch((error) => {
        console.log(error);
        alert(error);
      })


  }


  useEffect(getArenas, []);


  return (

    <div style={{ fontFamily: "Calibri" }}>

<Navbar  style={{ marginLeft:70, width: "100%" }} color='light' className=' d-flex flex-direction-row'>
          <Container style={{width:"100%"}} className='d-flex justify-content-around'>
         
          <NavItem className='d-flex flex-column justify-content-center'>
              <Link to="/" style={{border:"2px solid black",padding:"5px",borderRadius:"2px",color:"white",backgroundColor:"black"}}   onClick={() => { window.location.href = "/" }}>Home</Link>
            </NavItem>
        
            
            <NavItem className='d-flex flex-column justify-content-center'>
            <Link to="/Players" style={{border:"2px solid black",padding:"5px",borderRadius:"2px",color:"white",backgroundColor:"black"}}    onClick={() => { window.location.href = "/Players" }}>Players</Link>
            </NavItem>

            <NavItem className='d-flex flex-column justify-content-center'>
            <Link to="/Teams" style={{border:"2px solid black",padding:"5px",borderRadius:"2px",color:"white",backgroundColor:"black"}}    onClick={() => { window.location.href = "/Teams" }}>Teams</Link>
            </NavItem>

         

          </Container>

        </Navbar>
  
      <div className='d-flex flex-row flex-wrap' style={{ marginLeft: 50, width: "100%" }}>
        {arenas.map(arena => (
          <div className="card" style={{ width: "300px",marginTop:10 }}>
            <img style={{height:"100%",width:"100%"}} src={`images/${arena.imageName}`} alt="Card image cap" />
            <div className="card-header">
              {arena.name}
            </div>
            <ul className="list-group list-group-flush">
            
              <li className="list-group-item">Location: {arena.location}</li>
              <li className="list-group-item">Team: {arena.team}</li>
              <li className="list-group-item">Capacity: {arena.capacity}</li>
            </ul>
          </div>
        ))}
      </div>
    </div>





  )
}


