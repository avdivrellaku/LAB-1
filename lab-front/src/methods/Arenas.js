import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Navbar,
  NavbarBrand,
  NavItem,
  Nav,
  Container
} from 'reactstrap';


export const Arenas = () => {
  const [arenas, setArenas] = useState([]);
  function getArenas() {
    const url = 'http://localhost:5164/api/Arenas';
    fetch(url, {
      method: 'GET'
    })
      .then(response => response.json())
      .then(arenasFromServer => {
        console.log(arenasFromServer);
        setArenas(arenasFromServer);
      })
      .catch((error) => {
        console.log(error);
        alert(error);
      })


  }

  function deleteArena(arenaId) {
    const url = `http://localhost:5164/api/Arenas/${arenaId}`;
    fetch(url, {
      method: 'DELETE'
    })
      .then(response => response.json())
      .then(responseFromServer => {
        console.log(responseFromServer);
        onArenaDeleted(arenaId);

      })
      .catch((error) => {
        console.log(error);
        alert(error);
      })

  }


  function onArenaDeleted(deletedArenaId) {
    let arenaCopy = [...arenas];

    const index = arenaCopy.findIndex((arenaCopyarena, currentIndex) => {
      if (arenaCopyarena.id === deletedArenaId) {
        return true;
      }
    });
    if (index !== -1) {
      arenaCopy.splice(index, 1);
    }

    setArenas(arenaCopy);


  }

  useEffect(getArenas, []);


  return (

    <div style={{ fontFamily: "Calibri" }}>
      <Navbar style={{marginLeft:300,width:"65%"}} color='dark' className='w-50 d-flex flex-direction-row'>
        <Container className='d-flex justify-content-around'>
          <NavbarBrand className='text-white my-1'>Arenas</NavbarBrand>
          <NavItem>
            <Link className="btn btn-primary my-3" onClick={() => { window.location.href = "/AddArena" }}>Add a new Arenas
            </Link>
          </NavItem>
        </Container>
      </Navbar>
      <div className='d-flex flex-row flex-wrap' style={{ marginLeft: 50, width: "100%" }}>
        {arenas.map(arena => (
          <div className="card" style={{ width: "300px" }}>
            <img src={`images/${arena.imageName}`} alt="Card image cap" />
            <div className="card-header">
              {arena.name}
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">{arena.id}</li>
              <li className="list-group-item">{arena.location}</li>
              <li className="list-group-item">{arena.team}</li>
              <li className="list-group-item">{arena.capacity}</li>
              <li className="list-group-item d-flex justify-content-around"><Link to={`/editArena/${arena.id}/${arena.name}/${arena.location}/${arena.team}/${arena.capacity}/${arena.imageName}`} onClick={() => { window.location.href = `/editArena/${arena.id}/${arena.name}/${arena.location}/${arena.team}/${arena.capacity}/${arena.imageName}` }} className='btn btn-warning'>Edit</Link>
                <button onClick={() => { if (window.confirm(`Are u sure u want to delete " ${arena.name} ${arena.location} ${arena.team} " ?`)) deleteArena(arena.id) }} className='btn btn-danger'>Delete</button>
              </li>
            </ul>
          </div>
        ))}
      </div>
    </div>





  )
}


