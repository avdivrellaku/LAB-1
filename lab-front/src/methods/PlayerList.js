import React,{useState,useEffect} from 'react';



export const PlayerList = () => {

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
  useEffect(getPlayers,[]); 

  return (
      <div style={{marginLeft:300,width:"65%"}} className='table-responsive-lg'>
        <table className='table'>
          <thead>
            <tr>
              <th scope='col'>Id</th>
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
               <button className='btn btn-danger'>Delete</button></td>
               </tr>
               
            ))}
          
               
          
          </thead>
        </table>
        </div>
     
  )
}

