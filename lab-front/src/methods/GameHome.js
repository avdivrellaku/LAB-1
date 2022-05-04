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


export const GamesHome = () => {
  const[games,setGames] = useState([]);  
  function getGames() {
    const url = 'http://localhost:5164/api/Game';
    fetch(url,{
      method: 'GET'
    })
    .then(response => response.json())
    .then(gamesFromServer => {
      console.log(gamesFromServer);
      setGames(gamesFromServer);
    })
    .catch((error)=>{
      console.log(error);
      alert(error); 
    })

    
  }
  function deleteGames(gamesId){
    const url = `http://localhost:5164/api/Game/${gamesId}`;
    fetch(url,{
      method: 'DELETE'
    })
    .then(response => response.json())
    .then(responseFromServer => {
      console.log(responseFromServer);
      onGamesDeleted(gamesId);
    
    })
    .catch((error)=>{
      console.log(error);
      alert(error); 
    })

  }

  function onGamesDeleted(deletedGamesId){
    let gamesCopy = [...games];

    const index = gamesCopy.findIndex((gamesCopygames,currentIndex) => {
      if (gamesCopygames.id === deletedGamesId){
        return true;
      }
    });
    if (index !== -1){
      gamesCopy.splice(index,1);
    }

    setGames(gamesCopy);

   
  }
  useEffect(getGames,[]); 

  return (
    
    
    <div style={{marginLeft:300,width:"65%"}} className='table-responsive-lg'>
      
    <Navbar style={{marginLeft:187}} color='dark' className='w-50 d-flex flex-direction-row'>
      <Container className='d-flex justify-content-around'>
        <NavbarBrand className='text-white my-1'>Games</NavbarBrand>
        <NavItem>
          <Link to="/addGames"className="btn btn-primary my-3" onClick={() => {window.location.href="/addGames"}}>Add a new Game
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
              <th scope='col'>Team 1</th>
              <th scope='col'>Team 2</th>
              <th scope='col'>Score</th>
              <th scope='col'>Date</th>
            </tr>
            {games.map(game =>(
               <tr key={game.id}>
               <td>{game.id}</td>
                 <td>{game.team1}</td>
                 <td>{game.team2}</td>
                 <td>{game.score}</td>
                 <td>{game.date}</td>
                 <td className='d-flex justify-content-around'><button className='btn btn-warning'>Edit</button>
               <button onClick={() => {if(window.confirm(`Are u sure u want to delete " ${game.team1} ${game.team2} " ?`))deleteGames(game.id)}} className='btn btn-danger'>Delete</button></td>
               </tr>
               
            ))}
          
               
          
          </thead>
        </table>
        </div>
    
    
    
     
    
  )
}
