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
  useEffect(getPlayers,[]); 
  
//   function deletePlayers(playerId){
//     const url = `http://localhost:5164/api/Players/${playerId}`;
//     fetch(url,{
//       method: 'DELETE'
//     })
//     .then(response => response.json())
//     .then(responseFromServer => {
//       console.log(responseFromServer);
//       onPlayerDeleted(playerId);
    
//     })
//     .catch((error)=>{
//       console.log(error);
//       alert(error); 
//     })

//   }
 

  return (
    
      <div style={{fontFamily:"Calibri"}}>
        
        <h2 >All time points Leaders</h2>
    
    <div className='d-flex flex-row flex-wrap ' style={{marginLeft:50,height:"500px",width:"80%"}}>
       
    
        {players.map(player =>(
            <div className='d-flex flex-row card' style={{marginLeft:5,height:"170px",width:"35%"}}>
    
        <img src={`images/${player.imageName}`} className='card' style={{height:"100%",width:"60%",padding:2}} />
    <div style={{marginLeft:5,width:"140px"}} className='d-flex flex-column justify-content-evenly'>
        <h3>{player.nr}</h3>
        <h4>{player.fullName}</h4>
            <h5>{player.points} points</h5>
            <h6>{player.gamesPlayed} games played</h6>
        </div>
        
        </div>
        ))}
      
     
        
        </div>
    
        </div>
    
    
     
    
  )
}


