import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import { PlayersHome } from './methods/PlayersHome';
import { TeamHome } from './methods/TeamHome';
import { AddPlayer } from './methods/AddPlayer';
import { AddTeam } from './methods/AddTeam';
import { Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Navbar,
  NavItem,
  Container
} from 'reactstrap';



function App() {
  return (
      <div style={{width: "80%"}}>
          

        <Router>
        <Navbar style={{marginLeft:380,width:"100%"}} color='light' className='w-50 d-flex flex-direction-row'>
      <Container className='d-flex justify-content-around'>
      <NavItem className='d-flex justify-content-between'>
                  <Link to="/" className="btn btn-dark my-3"onClick={() => {window.location.href="/"}}>Home</Link>
          </NavItem>
        <NavItem className='d-flex justify-content-between'>
                  <Link to="/" className="btn btn-dark my-3"onClick={() => {window.location.href="/playersHome"}}>Players</Link>
          </NavItem>
       
          <NavItem className='d-flex justify-content-between'>
                  <Link to="/" className="btn btn-dark my-3" onClick={() => {window.location.href="/teamHome"}}>Teams</Link>
          </NavItem>
          <NavItem className='d-flex justify-content-between'>
                  <Link to="/" className="btn btn-dark my-3">Games</Link>
          </NavItem>


      </Container>

    </Navbar>
         
          <Switch>
            <Route exact path="/playersHome" component={PlayersHome}/>
            <Route exact path="/teamHome" component={TeamHome}/>
            <Route path="/addPlayer" component={AddPlayer}/>
            <Route path="/addTeam" component={AddTeam}/>
      
        </Switch>
        </Router>

        </div>
  );



}

export default App;
