import React from 'react';
import { Link  } from 'react-router-dom';
import { PlayerList } from './PlayerList';
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


export const PlayersHome = () => {
  return (
    
    
    <div >
      
    <Navbar style={{marginLeft:380}} color='dark' className='w-50 d-flex flex-direction-row'>
      <Container className='d-flex justify-content-around'>
        <NavbarBrand className='text-white my-1'>Players</NavbarBrand>
        <NavItem>
          <Link className="btn btn-primary my-3" to='/add'>Add a new Player
          </Link>
        </NavItem>
      </Container>

    </Navbar>
    <Router>
         
         <Switch>
         <Route component={PlayerList}/>
 
     
       </Switch>
       </Router>
    </div>
    
     
    
  )
}


