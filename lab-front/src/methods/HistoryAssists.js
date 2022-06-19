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
import { Arenas } from './Arenas';




export const HistoryAssists = () => {

  const [players, setHistoryAssists] = useState([]);
  function getHistoryAssists() {
    const url = 'http://localhost:5164/api/HistoryAssists';
    fetch(url, {
      method: 'GET'
    })
      .then(response => response.json())
      .then(assistsFromServer => {
        console.log(assistsFromServer);
        setHistoryAssists(assistsFromServer);
      })
      .catch((error) => {
        console.log(error);
        alert(error);
      })


  }
  function deleteHistoryAssists(assistsId) {
    const url = `http://localhost:5164/api/HistoryAssists/${assistsId}`;
    fetch(url, {
      method: 'DELETE'
    })
      .then(response => response.json())
      .then(responseFromServer => {
        console.log(responseFromServer);
        onHistoryAssistsDeleted(assistsId);

      })
      .catch((error) => {
        console.log(error);
        alert(error);
      })

  }

  function onHistoryAssistsDeleted(deletedAssistsId) {
    let assistsCopy = [...players];

    const index = assistsCopy.findIndex((assistsCopyassists, currentIndex) => {
      if (assistsCopyassists.id === deletedAssistsId) {
        return true;
      }
    });
    if (index !== -1) {
      assistsCopy.splice(index, 1);
    }

    setHistoryAssists(assistsCopy);


  }
  useEffect(getHistoryAssists, []);


  return (
    
    <div style={{fontFamily:"Calibri"}}>
         <Navbar style={{marginLeft:300,width:"65%"}} color='dark' className='w-50 d-flex flex-direction-row'>
        <Container className='d-flex justify-content-around'>
          <NavbarBrand className='text-white my-1'>History Assists</NavbarBrand>
          <NavItem>
            <Link className="btn btn-primary my-3" onClick={() => { window.location.href = "/AddHistoryAssists" }}>Add a new Player
            </Link>
          </NavItem>
        </Container>
      </Navbar>
      
      <h2 style={{paddingLeft:60}} >All time Assists</h2>
  
  <div className='d-flex justify-content-around flex-wrap'  style={{marginLeft:5, width: "100%"}}>
     {players.map(player =>(
         
      <div key={player.id} className="card" style={{width: "300px", margin:"10px"}}>      
         <img src={`images/${player.imageName}`} style={{height:"100%",width:"100%",padding:2}} />
         <div className="card-header">
            {player.fullName}
         </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">Nr: {player.nr} </li>
                <li className="list-group-item">Assists: {player.assists} </li>
                <li className="list-group-item">Games Played:{player.gamesPlayed} </li>
                <li className="list-group-item">Turnovers:{player.turnovers} </li>
                <li className="list-group-item d-flex justify-content-around"><Link to={`/editHistoryAssists/${player.id}}`} onClick={() => { window.location.href = `/editHistoryAssists/${player.id}` }} className='btn btn-warning'>Edit</Link> 
                    <button onClick={() => { if (window.confirm(`Are u sure u want to delete " ${player.fullName} " ?`)) deleteHistoryAssists(player.id) }} className='btn btn-danger'>Delete</button>
                </li>
            </ul>       
          </div>
 
  
      
      ))}
    
   
      
      </div>

      </div>
  
  
   
  
)
}