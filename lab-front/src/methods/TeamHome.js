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

      <Navbar style={{ marginLeft: 200}} color='dark' className='w-50 d-flex flex-direction-row'>
        <Container className='d-flex justify-content-around'>
          <NavbarBrand className='text-white my-1'>Teams</NavbarBrand>
          <NavItem>
            <Link className="btn btn-primary my-3" onClick={() => {window.location.href="/addTeam"}}>Add a new Team
            </Link>
          </NavItem>
        </Container>

      </Navbar>
      <Router>

        <Switch>
          


        </Switch>
      </Router>
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
              <td className='d-flex justify-content-around' ><Link to={`/editPlayer/${team.id}/${team.name}/${team.owner}/${team.coach}/${team.division}/${team.conference}`} onClick={() => {window.location.href=`/editteam/${team.id}/${team.name}/${team.owner}/${team.coach}/${team.division}/${team.conference}`}} className='btn btn-warning'>Edit</Link>
                <button onClick={() => { if (window.confirm(`Are u sure u want to delete " ${team.name} " ?`)) deleteTeam(team.id) }} className='btn btn-danger'>Delete</button></td>
            </tr>

          ))}



        </thead>
      </table>
    </div>



  )
}