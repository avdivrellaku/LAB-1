

import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { PlayersHome } from './methods/PlayersHome';
import { TeamHome } from './methods/TeamHome';
import { GamesHome } from './methods/GameHome';
import { AddGames } from './methods/AddGame';
import { AddPlayer } from './methods/AddPlayer';
import { AddTeam } from './methods/AddTeam';
import { AddArena } from './methods/AddArena';
import { Link } from 'react-router-dom';
import { EditPlayer } from './methods/EditPlayer';
import { EditTeam } from './methods/EditTeam';
import { EditGame } from './methods/EditGame';
import { EditUser } from './methods/EditUser';
import { EditArena } from './methods/EditArena';
import { Register } from './methods/Register';
import { UsersHome } from './methods/UsersHome';
import { History } from './methods/History';
import { Arenas } from './methods/Arenas';

import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Navbar,
  NavItem,
  Container
} from 'reactstrap';



function App() {
  return (
    <div style={{ width: "80%" }}>


      <Router>
        <Navbar style={{ marginLeft: 380, width: "100%" }} color='light' className='w-50 d-flex flex-direction-row'>
          <Container className='d-flex justify-content-around'>
            <NavItem className='d-flex justify-content-between'>
              <Link to="/" className="btn btn-dark my-3" onClick={() => { window.location.href = "/" }}>Home</Link>
            </NavItem>
            <NavItem className='d-flex justify-content-between'>
              <Link to="/" className="btn btn-dark my-3" onClick={() => { window.location.href = "/playersHome" }}>Players</Link>
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

      
          


        <Switch>
          <Route  path="/playersHome" component={PlayersHome} />
          <Route  path="/teamHome" component={TeamHome} />
          <Route path="/addPlayer" component={AddPlayer} />
          <Route path="/addTeam" component={AddTeam} />
          <Route path="/addGames" component={AddGames} />
          <Route path="/gamesHome" component={GamesHome} />
          <Route path="/usersHome" component={UsersHome} />
          <Route path="/Register" component={Register} />
          <Route path="/History" component={History} />
          <Route path="/Arenas" component={Arenas} />
          <Route path="/AddArena" component={AddArena} />
          <Route path="/editPlayer/:id" component={EditPlayer} />
          <Route path="/editTeam/:id" component={EditTeam} />
          <Route path="/editGame/:id/:team1/:team2/:score/:date" component={EditGame} />
          <Route path="/editUser/:id" component={EditUser} />
          <Route path="/editArena/:id/:name/:location/:team/:capacity/:imageName" component={EditArena} />

        </Switch>
      </Router>

    </div>
  );



}

export default App;
