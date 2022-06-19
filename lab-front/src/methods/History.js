import React,{useState,useEffect} from 'react';
import { Link  } from 'react-router-dom';
import {
  Navbar,
  NavbarBrand,
  NavItem,
  Nav,
  Container
} from 'reactstrap';


export const History = () => {
    const[players,setPlayers] = useState([]);  
  function getPlayers() {
    const url = 'http://localhost:5164/api/HistoryPoints';
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
    const url = `http://localhost:5164/api/HistoryPoints/${playerId}`;
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
    
      <div style={{fontFamily:"Calibri"}}>
        <Navbar style={{marginLeft:187}} color='dark' className='w-50 d-flex flex-direction-row'>
      <Container className='d-flex justify-content-around'>
        <NavbarBrand className='text-white my-1'>Players</NavbarBrand>
        <NavItem>
          <Link className="btn btn-primary my-3" onClick={() => {window.location.href="/addHistoryPoints"}}>Add a new Player
          </Link>
        </NavItem>
      </Container>

    </Navbar>
        
        <h2 >All time points Leaders</h2>
    
    <div className='d-flex flex-row flex-wrap ' style={{marginLeft:50,height:"500px",width:"80%"}}>
       
    
        {players.map(player =>(
            <div key={player.id} className='d-flex flex-row card' style={{marginLeft:5,height:"50%",width:"40%"}}>
    
        <img src={`images/${player.imageName}`} className='card' style={{height:"100%",width:"60%",padding:2}} />
    <div style={{marginLeft:5,width:"140px"}} className='d-flex flex-column justify-content-evenly'>
        <h3>{player.nr}</h3>
        <h4>{player.fullName}</h4>
            <h5>{player.points} points</h5>
            <h6>{player.gamesPlayed} games played</h6>
            <div className='d-flex flex-row'>
            <Link to={`/editHistoryPoints/${player.id}`} onClick={() => {window.location.href=`/editHistoryPoints/${player.id}`}} className='btn btn-warning'>Edit</Link>
            <button onClick={() => { if (window.confirm(`Are u sure u want to delete " ${player.fullName} " ?`)) deletePlayers(player.id) }} className='btn btn-danger'>Delete</button>
            </div>
        </div>
              

        </div>
        ))}
      
     
        
        </div>
    
        </div>
    
    
     
    
  )
}


