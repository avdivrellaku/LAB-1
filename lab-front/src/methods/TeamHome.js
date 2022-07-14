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




export const TeamHome = () => {

  const [teams, setTeam] = useState([]);
  function getTeams() {
    const url = 'http://localhost:5164/api/Team';
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
  function deleteTeam(teamId) {
    const url = `http://localhost:5164/api/Team/${teamId}`;
    fetch(url, {
      method: 'DELETE'
    })
      .then(response => response.json())
      .then(responseFromServer => {
        console.log(responseFromServer);
        onTeamDeleted(teamId);

      })
      .catch((error) => {
        console.log(error);
        alert(error);
      })

  }

  function onTeamDeleted(deletedTeamId) {
    let teamCopy = [...teams];

    const index = teamCopy.findIndex((teamCopyteam, currentIndex) => {
      if (teamCopyteam.id === deletedTeamId) {
        return true;
      }
    });
    if (index !== -1) {
      teamCopy.splice(index, 1);
    }

    setTeam(teamCopy);


  }
  useEffect(getTeams, []);

  return (


    <div style={{marginLeft:220,width:"85%"}} className='table-responsive-lg'>
      <Navbar  style={{ marginLeft:70, width: "100%" }} color='light' className=' d-flex flex-direction-row'>
          <Container style={{width:"100%"}} className='d-flex justify-content-around'>
            <NavItem className='d-flex justify-content-between'>
              <Link to="/" className="btn btn-dark my-3" onClick={() => { window.location.href = "/" }}>Home</Link>
            </NavItem>
            <NavItem className='d-flex justify-content-between'>
              <Link to="/playersHome" className="btn btn-dark my-3" onClick={() => { window.location.href = "/playersHome" }}>Players</Link>
            </NavItem>
            <NavItem className='d-flex justify-content-between'>
              <Link to="/teamHome" className="btn btn-dark my-3" onClick={() => { window.location.href = "/teamHome" }}>Teams</Link>
            </NavItem>
            <NavItem className='d-flex justify-content-between'>
              <Link to="/gamesHome" className="btn btn-dark my-3" onClick={() => { window.location.href = "/gamesHome" }}>Games</Link>
            </NavItem>
            <NavItem className='d-flex justify-content-between'>
              <Link to="/UsersHome" className="btn btn-dark my-3" onClick={() => { window.location.href = "/UsersHome" }}>Users</Link>
            </NavItem>
            <NavItem className='d-flex justify-content-between'>
            <Link to="/History" className="btn btn-dark my-3" onClick={() => { window.location.href = "/History" }}>History</Link>
            </NavItem>
            <NavItem className='d-flex justify-content-between'>
            <Link to="/HistoryAssists" className="btn btn-dark my-3" onClick={() => { window.location.href = "/HistoryAssists" }}>History Assists</Link>
            </NavItem>
            <NavItem className='d-flex justify-content-between'>
            <Link to="/Arenas" className="btn btn-dark my-3" onClick={() => { window.location.href = "/Arenas" }}>Arenas</Link>
            </NavItem>

          </Container>

        </Navbar>

      <Navbar style={{ marginLeft: 200}} color='dark' className='w-50 d-flex flex-direction-row'>
        <Container className='d-flex justify-content-around'>
          <NavbarBrand className='text-white my-1'>Teams</NavbarBrand>
          <NavItem>
            <Link className="btn btn-primary my-3" onClick={() => {window.location.href="/addTeam"}}>Add a new Team
            </Link>
          </NavItem>
        </Container>

      </Navbar>
    
      <table className='table'>
        <thead>
          <tr>
            <th scope='col'>ID</th>
            <th scope='col'>Name</th>
            <th scope='col'>Owner</th>
            <th scope='col'>Coach</th>
            <th scope='col'>Divison</th>
            <th scope='col'>Conference</th>
          
          </tr>
          {teams.map(team => (
            <tr key={team.id}>
              <td>{team.id}</td>
              <td>{team.name}</td>
              <td>{team.owner}</td>
              <td>{team.coach}</td>
              <td>{team.division}</td>
              <td>{team.conference}</td>
              
              <td className='d-flex justify-content-around' ><Link to={`/editTeam/${team.id}`} onClick={() => {window.location.href=`/editTeam/${team.id}`}} className='btn btn-warning'>Edit</Link>
                <button onClick={() => { if (window.confirm(`Are u sure u want to delete " ${team.name} " ?`)) deleteTeam(team.id) }} className='btn btn-danger'>Delete</button></td>
            </tr>

          ))}



        </thead>
      </table>
    </div>



  )
}