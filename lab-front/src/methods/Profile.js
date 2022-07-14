import React,{useState,useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import authHeader from './auth-header';

import {
  Navbar,
  NavItem,
  Container
} from 'reactstrap';
export const Profile = () => {

  const firstName = (localStorage.getItem("firstName"));
  const lastName = (localStorage.getItem("lastName"));


  const tokeni = (localStorage.getItem("usertoken"));


  function logout(){
    localStorage.clear();
    {window.location.href="/"}
  }

  function isAdmin(){
    const role = (localStorage.getItem("Role"));

    if (role == 'admin'){
        return true;
    }
  }

  return (


    <div  style={{width:"1520px"}}>

      <Navbar style={{ marginLeft: 100, width: "100%", }} color='light' className='w-75 d-flex flex-direction-row justify-content-between'>
          <Container style={{width:"90%"}} className='d-flex justify-content-around'>
            <NavItem className='d-flex flex-column justify-content-center'>
              <Link to="/" style={{border:"2px solid black",padding:"5px",borderRadius:"2px",color:"white",backgroundColor:"black"}}   onClick={() => { window.location.href = "/" }}>Home</Link>
            </NavItem>
           { tokeni && isAdmin() && <NavItem className='d-flex flex-column justify-content-center'>
              <Link to="/Dashboard" style={{border:"2px solid black",padding:"5px",borderRadius:"2px",color:"white",backgroundColor:"black"}}    onClick={() => { window.location.href = "/Dashboard" }}>Dashboard</Link>
            </NavItem>}
         
      


  <h4>Hi, {firstName} {lastName}</h4>

  <Link to="/" onClick={logout} className="btn btn-danger btn-md w-15 mt-3 mx-5">Log Out</Link>
</Container>
      

        </Navbar>
        


    </div>



  )

}

