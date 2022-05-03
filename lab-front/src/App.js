import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import { PlayersHome } from './methods/PlayersHome';
import { AddPlayer } from './methods/AddPlayer';
import { Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
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



function App() {
  return (
      <div style={{width: "80%"}}>
          

        <Router>
        <Navbar style={{marginLeft:380,width:"100%"}} color='light' className='w-50 d-flex flex-direction-row'>
      <Container className='d-flex justify-content-around'>
        
        <NavItem className='d-flex justify-content-between'>
                  <Link className="btn btn-primary my-3" to='/playersHome'>Players</Link>
          </NavItem>
       
          <NavItem className='d-flex justify-content-between'>
                  <Link className="btn btn-primary my-3" to='/add'>Teams</Link>
          </NavItem>
          <NavItem className='d-flex justify-content-between'>
                  <Link className="btn btn-primary my-3" to='/add'>Games</Link>
          </NavItem>


      </Container>

    </Navbar>
         
          <Switch>
          <Route exact path="/playersHome" component={PlayersHome}/>
          <Route path="/add" component={AddPlayer}/>
      
        </Switch>
        </Router>

        </div>
  );



}

export default App;
