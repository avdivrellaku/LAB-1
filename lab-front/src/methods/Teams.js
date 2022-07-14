import React,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Navbar,
  NavbarBrand,
  NavItem,
  Nav,
  Container
} from 'reactstrap';




export const Teams = () => {

  const [teams, setTeam] = useState([]);
  const [teamss,setTeamm] = useState([]);
  function getTeams() {
    const url = 'http://localhost:5164/api/Team/East';
    fetch(url, {
      method: 'GET'
    })
      .then(response => response.json())
      .then(teamFromServer => {
        console.log(teamFromServer);
        setTeam(teamFromServer);
      })
      .catch((error) => {
        console.log(error);
        alert(error);
      })
  }
  function getTeamss() {
    const url = 'http://localhost:5164/api/Team/West';
    fetch(url, {
      method: 'GET'
    })
      .then(response => response.json())
      .then(teamFromServer => {
        console.log(teamFromServer);
        setTeamm(teamFromServer);
      })
      .catch((error) => {
        console.log(error);
        alert(error);
      })
  }
  useEffect(getTeams, []);
  useEffect(getTeamss, []);
  return (


    <div style={{width:"1520px"}} className='table-responsive-lg'>
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

            

          </Container>

          </Navbar>
    
    <div className='d-flex justify-content-around align-items-start'>
      <table style={{width:"45%",border:"transparent"}} className='table'>
      <caption style={{captionSide:"top",fontWeight:"bolder",color:"black",textDecoration:"none"}} >Eastern Conference</caption>
        <thead>
          <tr>
            <th style={{marginLeft:"5%"}} scope='col'>   </th>
            <th scope='col'>Name</th>
            <th scope='col'>Divison</th>
          </tr>
          {teams.map(team => (
            <tr key={team.id} >
             <td className='d-flex flex-row justify-content-center align-items-center' style={{width:"20%",marginLeft:"25%"}}><img style={{width:"60px",height:"60px"}} src={`/images/${team.imageName}`}/></td>
              <td  style={{width:"30%"}}>{team.name}</td>
              <td   style={{width:"30%"}}>{team.division}</td>
            </tr>

          ))}



        </thead>
      </table>

      <table style={{width:"45%",border:"transparent"}} className='table'>
      <caption style={{captionSide:"top",fontWeight:"bolder",color:"black",textDecoration:"none"}} >Western Conference</caption>
        <thead>
          <tr>
            <th scope='col'>   </th>
            <th scope='col'>Name</th>
            <th scope='col'>Divison</th>
          </tr>
          {teamss.map(teamm => (
            <tr key={teamm.id} >
             <td className='d-flex flex-row justify-content-center align-items-center' style={{width:"20%",marginLeft:"25%"}}><img style={{width:"60px",height:"60px"}} src={`/images/${teamm.imageName}`}/></td>
              <td   style={{width:"30%"}}>{teamm.name}</td>
              <td   style={{width:"30%"}}>{teamm.division}</td>
            </tr>

          ))}



        </thead>
      </table>
      </div>
    </div>



  )
}