import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import {
  Navbar,
  NavItem,
  Container
} from 'reactstrap';
export const Home = () => {
  return (
    <div>
      <Navbar style={{ marginLeft: 380, width: "100%" }} color='light' className='w-50 d-flex flex-direction-row'>
          <Container className='d-flex justify-content-around'>
            <NavItem className='d-flex justify-content-between'>
              <Link to="/" className="btn btn-dark my-3" onClick={() => { window.location.href = "/" }}>Home</Link>
            </NavItem>
            <NavItem className='d-flex justify-content-between'>
              <Link to="/playersHome" className="btn btn-dark my-3" onClick={() => { window.location.href = "/playersHome" }}>Players</Link>
            </NavItem>
            <NavItem className='d-flex justify-content-between'>
              <Link to="/" className="btn btn-dark my-3" onClick={() => { window.location.href = "/teamHome" }}>Teams</Link>
            </NavItem>
            <NavItem className='d-flex justify-content-between'>
              <Link to="/" className="btn btn-dark my-3" onClick={() => { window.location.href = "/gamesHome" }}>Games</Link>
            </NavItem>
            <NavItem className='d-flex justify-content-between'>
              <Link to="/" className="btn btn-dark my-3" onClick={() => { window.location.href = "/UsersHome" }}>Users</Link>
            </NavItem>
            <NavItem className='d-flex justify-content-between'>
            <Link to="/" className="btn btn-dark my-3" onClick={() => { window.location.href = "/History" }}>History</Link>
            </NavItem>
            <NavItem className='d-flex justify-content-between'>
            <Link to="/" className="btn btn-dark my-3" onClick={() => { window.location.href = "/Arenas" }}>Arenas</Link>
            </NavItem>

          </Container>

        </Navbar>




    </div>



  )

}

