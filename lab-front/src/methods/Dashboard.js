import React,{useState,useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import authHeader from './auth-header';

import {
  Navbar,
  NavItem,
  Container
} from 'reactstrap';
export const Dashboard = () => {





  return (


    <div  style={{width:"1520px"}}>
      <Navbar style={{ marginLeft: 100, width: "100%", }} color='light' className='w-75 d-flex flex-direction-row justify-content-between'>
          <Container style={{width:"90%"}} className='d-flex justify-content-around'>
            <NavItem className='d-flex flex-column justify-content-center'>
              <Link to="/" style={{border:"2px solid black",padding:"5px",borderRadius:"2px",color:"white",backgroundColor:"black"}}   onClick={() => { window.location.href = "/" }}>Home</Link>
            </NavItem>
            <NavItem className='d-flex flex-column justify-content-center'>
              <Link to="/playersHome" style={{border:"2px solid black",padding:"5px",borderRadius:"2px",color:"white",backgroundColor:"black"}}    onClick={() => { window.location.href = "/playersHome" }}>Players</Link>
            </NavItem>
            <NavItem className='d-flex flex-column justify-content-center'>
              <Link to="/teamHome" style={{border:"2px solid black",padding:"5px",borderRadius:"2px",color:"white",backgroundColor:"black"}}    onClick={() => { window.location.href = "/teamHome" }}>Teams</Link>
            </NavItem>
            <NavItem className='d-flex flex-column justify-content-center'>
              <Link to="/gamesHome" style={{border:"2px solid black",padding:"5px",borderRadius:"2px",color:"white",backgroundColor:"black"}}    onClick={() => { window.location.href = "/gamesHome" }}>Games</Link>
            </NavItem>
            <NavItem className='d-flex flex-column justify-content-center'>
              <Link to="/UsersHome" style={{border:"2px solid black",padding:"5px",borderRadius:"2px",color:"white",backgroundColor:"black"}}    onClick={() => { window.location.href = "/UsersHome" }}>Users</Link>
            </NavItem>
            <NavItem className='d-flex flex-column justify-content-center'>
            <Link to="/History"  style={{border:"2px solid black",padding:"5px",borderRadius:"2px",color:"white",backgroundColor:"black"}} onClick={() => { window.location.href = "/History" }}>History</Link>
            </NavItem>
            <NavItem className='d-flex flex-column justify-content-center'>
            <Link to="/HistoryAssists" style={{border:"2px solid black",padding:"5px",borderRadius:"2px",color:"white",backgroundColor:"black"}}    onClick={() => { window.location.href = "/HistoryAssists" }}>History Assists</Link>
            </NavItem>
            <NavItem className='d-flex flex-column justify-content-center'>
            <Link to="/Arenas" style={{border:"2px solid black",padding:"5px",borderRadius:"2px",color:"white",backgroundColor:"black"}}    onClick={() => { window.location.href = "/Arenas" }}>Arenas</Link>
            </NavItem> 
            <NavItem className='d-flex flex-column justify-content-center'>
            <Link to="/AddNews" style={{border:"2px solid black",padding:"5px",borderRadius:"2px",color:"white",backgroundColor:"black"}}    onClick={() => { window.location.href = "/AddNews" }}>News</Link>
            </NavItem>
      




</Container>
      

        </Navbar>

        <h1 style={{textAlign:"center"}}>DASHBOARD</h1>
    </div>



  )

}

