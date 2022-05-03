import React,{useState,useEffect} from 'react';
import { Link  } from 'react-router-dom';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
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


export const PlayersHome = () => {
  const[players,setPlayers] = useState([]);  
  function getPlayers() {
    const url = 'http://localhost:5164/api/Players';
    fetch(url,{
      method: 'GET'
    })
    .then(response => response.json())
    .then(playersFromServer => {
      console.log(playersFromServer);
      setPlayers(playersFromServer);
    })
    .catch((error)=>{
      console.log(error);
      alert(error); 
    })

    
  }
  function deletePlayers(playerId){
    const url = `http://localhost:5164/api/Players/${playerId}`;
    fetch(url,{
      method: 'DELETE'
    })
    .then(response => response.json())
    .then(responseFromServer => {
      console.log(responseFromServer);
      onPlayerDeleted(playerId);
    
    })
    .catch((error)=>{
      console.log(error);
      alert(error); 
    })

  }

  function onPlayerDeleted(deletedPlayerId){
    let playerCopy = [...players];

    const index = playerCopy.findIndex((playerCopyplayer,currentIndex) => {
      if (playerCopyplayer.id === deletedPlayerId){
        return true;
      }
    });
    if (index !== -1){
      playerCopy.splice(index,1);
    }

    setPlayers(playerCopy);

   
  }
  useEffect(getPlayers,[]); 

  return (
    
    
    <div style={{marginLeft:300,width:"65%"}} className='table-responsive-lg'>
      
    <Navbar style={{marginLeft:187}} color='dark' className='w-50 d-flex flex-direction-row'>
      <Container className='d-flex justify-content-around'>
        <NavbarBrand className='text-white my-1'>Players</NavbarBrand>
        <NavItem>
          <Link className="btn btn-primary my-3" onClick={() => {window.location.href="/add"}}>Add a new Player
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
              <th scope='col'>First Name</th>
              <th scope='col'>Last Name</th>
              <th scope='col'>Age</th>
              <th scope='col'>Position</th>
              <th scope='col'>Team</th>
            </tr>
            {players.map(player =>(
               <tr key={player.id}>
               <td>{player.id}</td>
                 <td>{player.firstName}</td>
                 <td>{player.lastName}</td>
                 <td>{player.age}</td>
                 <td>{player.position}</td>
                 <td>{player.team}</td>
                 <td className='d-flex justify-content-around'><button className='btn btn-warning'>Edit</button>
               <button onClick={() => {if(window.confirm(`Are u sure u want to delete " ${player.firstName} ${player.lastName} " ?`))deletePlayers(player.id)}} className='btn btn-danger'>Delete</button></td>
               </tr>
               
            ))}
          
               
          
          </thead>
        </table>
        </div>
    
    
    
     
    
  )
}


