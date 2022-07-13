import React,{useState,useEffect} from 'react';
import { Link  } from 'react-router-dom';
import {
  Navbar,
  NavbarBrand,
  NavItem,
  Nav,
  Container
} from 'reactstrap';


export const UsersHome = () => {
  const[users,setUsers] = useState([]);  
  function getUsers() {
    const url = 'http://localhost:5164/api/User';
    fetch(url,{
      method: 'GET'
    })
    .then(response => response.json())
    .then(usersFromServer => {
      console.log(usersFromServer);
      setUsers(usersFromServer);
    })
    .catch((error)=>{
      console.log(error);
      alert(error); 
    })

    
  }
  function deleteUsers(userId){
    const url = `http://localhost:5164/api/User/${userId}`;
    fetch(url,{
      method: 'DELETE'
    })
    .then(response => response.json())
    .then(responseFromServer => {
      console.log(responseFromServer);
      onUserDeleted(userId);
    
    })
    .catch((error)=>{
      console.log(error);
      alert(error); 
    })

  }
  

  function onUserDeleted(deletedUserId){
    let userCopy = [...users];

    const index = userCopy.findIndex((userCopyuser,currentIndex) => {
      if (userCopyuser.id === deletedUserId){
        return true;
      }
    });
    if (index !== -1){
        userCopy.splice(index,1);
    }

    setUsers(userCopy);

   
  }
  useEffect(getUsers,[]); 

  return (
    
    
    <div style={{marginLeft:300,width:"65%"}} className='table-responsive-lg'>
           <Navbar  style={{ marginLeft:70, width: "100%" }} color='light' className=' d-flex flex-direction-row'>
          <Container style={{width:"100%"}} className='d-flex justify-content-around'>
            <NavItem className='d-flex justify-content-between'>
              <Link to="/" className="btn btn-dark my-3" onClick={() => { window.location.href = "/" }}>Home</Link>
            </NavItem>
            <NavItem className='d-flex justify-content-between'>
              <Link to="/playersHome" className="btn btn-dark my-3" onClick={() => { window.location.href = "/playersHome" }}>Players</Link>
            </NavItem>
            <NavItem className='d-flex justify-content-between'>
              <Link to="/teamHome" className="btn btn-dark my-3" onClick={() => { window.location.href = "/teamHome" }}>Teams</Link>
            </NavItem>
            <NavItem className='d-flex justify-content-between'>
              <Link to="/gamesHome" className="btn btn-dark my-3" onClick={() => { window.location.href = "/gamesHome" }}>Games</Link>
            </NavItem>
            <NavItem className='d-flex justify-content-between'>
              <Link to="/UsersHome" className="btn btn-dark my-3" onClick={() => { window.location.href = "/UsersHome" }}>Users</Link>
            </NavItem>
            <NavItem className='d-flex justify-content-between'>
            <Link to="/History" className="btn btn-dark my-3" onClick={() => { window.location.href = "/History" }}>History</Link>
            </NavItem>
            <NavItem className='d-flex justify-content-between'>
            <Link to="/HistoryAssists" className="btn btn-dark my-3" onClick={() => { window.location.href = "/HistoryAssists" }}>History Assists</Link>
            </NavItem>
            <NavItem className='d-flex justify-content-between'>
            <Link to="/Arenas" className="btn btn-dark my-3" onClick={() => { window.location.href = "/Arenas" }}>Arenas</Link>
            </NavItem>

          </Container>

        </Navbar>
      
    <Navbar style={{marginLeft:187}} color='dark' className='w-50 d-flex flex-direction-row'>
      <Container className='d-flex justify-content-around'>
        <NavbarBrand className='text-white my-1'>Users</NavbarBrand>
        <NavItem>
          <Link className="btn btn-primary my-3" onClick={() => {window.location.href="/Register"}}>Add a new User
          </Link>
        </NavItem>
      </Container>

    </Navbar>

    <img src='images/kobe.png'/>
      
        <table className='table'>
          <thead>
            <tr>
              <th scope='col'>ID</th>
              <th scope='col'>First Name</th>
              <th scope='col'>Last Name</th>
              <th scope='col'>Username</th>
              <th scope='col'>Email</th>
              <th scope='col'>Password</th>
              <th scope='col'>Role</th>
            </tr>
            {users.map(user =>(
               <tr key={user.id}>
               <td>{user.id}</td>
                 <td>{user.firstName}</td>
                 <td>{user.lastName}</td>
                 <td>{user.username}</td>
                 <td>{user.email}</td>
                 <td>{user.password}</td>
                 <td>{user.role}</td>
                 <td className='d-flex justify-content-around'><Link to={`/editUser/${user.id}`} onClick={() => {window.location.href=`/editUser/${user.id}`}} className='btn btn-warning'>Edit</Link>
               <button onClick={() => {if(window.confirm(`Are u sure u want to delete " ${user.firstName} ${user.lastName} " ?`))deleteUsers(user.id)}} className='btn btn-danger'>Delete</button></td>
               </tr>
               
            ))}
          
               
          
          </thead>
        </table>
        </div>
    
    
    
     
    
  )
}


