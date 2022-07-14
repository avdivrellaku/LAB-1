import React,{useState,useEffect} from 'react';
import { Link  } from 'react-router-dom';
import {
  Navbar,
  NavbarBrand,
  NavItem,
  Nav,
  Container
} from 'reactstrap';


export const Players = () => {
  const[guards,setGuards] = useState([]);  
  const[forwards,setForwards] = useState([]); 
  const[centers,setCenters] = useState([]); 
  function getGuards() {
    const url = 'http://localhost:5164/api/Players/Guards';
    fetch(url,{
      method: 'GET'
    })
    .then(response => response.json())
    .then(playersFromServer => {
      console.log(playersFromServer);
      setGuards(playersFromServer);
    })
    .catch((error)=>{
      console.log(error);
      alert(error); 
    })

    
  }

  function getForwards() {
    const url = 'http://localhost:5164/api/Players/Forwards';
    fetch(url,{
      method: 'GET'
    })
    .then(response => response.json())
    .then(playersFromServer => {
      console.log(playersFromServer);
      setForwards(playersFromServer);
    })
    .catch((error)=>{
      console.log(error);
      alert(error); 
    })

    
  }
  function getCenters() {
    const url = 'http://localhost:5164/api/Players/Centers';
    fetch(url,{
      method: 'GET'
    })
    .then(response => response.json())
    .then(playersFromServer => {
      console.log(playersFromServer);
      setCenters(playersFromServer);
    })
    .catch((error)=>{
      console.log(error);
      alert(error); 
    })

    
  }

  useEffect(getGuards,[]);
  useEffect(getForwards,[]);
  useEffect(getCenters,[]);


  return (
    
    
    
    <div style={{marginLeft:300,width:"65%"}} className='table-responsive-lg'>
      
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



      
        <table  className='table'>
            <caption style={{captionSide:"top"}} >Guards</caption>
          <thead>
            <tr>
            <th scope='col'>First Name</th>
              <th scope='col'>Last Name</th>
              <th scope='col'>Position</th>
              <th scope='col'>Team</th>
            </tr>
            {guards.map(guard =>(
               <tr key={guard.id}>
             
                 <td>{guard.firstName}</td>
                 <td>{guard.lastName}</td>
              
                 <td>{guard.position}</td>
                 <td>{guard.team}</td>

               </tr>
               
            ))}
          
               
          
          </thead>
        </table>

        <table className='table'>
        <caption style={{captionSide:"top"}}>Forwards</caption>
          <thead>
            <tr>
              <th scope='col'>First Name</th>
              <th scope='col'>Last Name</th>
              <th scope='col'>Position</th>
              <th scope='col'>Team</th>
            
            </tr>
            {forwards.map(forward =>(
               <tr key={forward.id}>
             
                 <td>{forward.firstName}</td>
                 <td>{forward.lastName}</td>
              
                 <td>{forward.position}</td>
                 <td>{forward.team}</td>

               </tr>
               
            ))}
          
               
          
          </thead>
        </table>
        <table className='table'>
        <caption style={{captionSide:"top"}}>Centers</caption>
          <thead>
            <tr>
            <th scope='col'>First Name</th>
              <th scope='col'>Last Name</th>
              <th scope='col'>Position</th>
              <th scope='col'>Team</th>
            </tr>
            {centers.map(center =>(
               <tr key={center.id}>
             
                 <td>{center.firstName}</td>
                 <td>{center.lastName}</td>
              
                 <td>{center.position}</td>
                 <td>{center.team}</td>

               </tr>
               
            ))}
          
               
          
          </thead>
        </table>
        </div>
    
    
    
     
    
  )
}


