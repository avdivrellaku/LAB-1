

import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
<<<<<<< HEAD
import { Home } from './methods/Home';
import { PlayersHome } from './methods/PlayersHome';
import { TeamHome } from './methods/TeamHome';
import { GamesHome } from './methods/GameHome';
import { AddGames } from './methods/AddGame';
import { AddPlayer } from './methods/AddPlayer';
import { AddTeam } from './methods/AddTeam';
import { AddArena } from './methods/AddArena';
import { EditPlayer } from './methods/EditPlayer';
import { EditTeam } from './methods/EditTeam';
import { EditGame } from './methods/EditGame';
import { EditUser } from './methods/EditUser';
import { EditArena } from './methods/EditArena';
import { Register } from './methods/Register';
import { UsersHome } from './methods/UsersHome';
import { History } from './methods/History';
import { Arenas } from './methods/Arenas';
import {AddHistoryPoints} from './methods/AddHistoryPoints';
import {EditHistoryPoints} from './methods/EditHistoryPoints';
=======
import { PlayersHome } from './methods/PlayersHome';
import { TeamHome } from './methods/TeamHome';
import { GamesHome } from './methods/GameHome';
import { HistoryAssists } from './methods/HistoryAssists';
import { AddGames } from './methods/AddGame';
import { AddPlayer } from './methods/AddPlayer';
import { AddTeam } from './methods/AddTeam';
import { AddArena } from './methods/AddArena';
import { AddHistoryAssists } from './methods/AddHistoryAssists';
import { Link } from 'react-router-dom';
import { EditPlayer } from './methods/EditPlayer';
import { EditTeam } from './methods/EditTeam';
import { EditGame } from './methods/EditGame';
import { EditUser } from './methods/EditUser';
import { EditArena } from './methods/EditArena';
import { EditHistoryAssists } from './methods/EditHistoryAssists';
import { Register } from './methods/Register';
import { UsersHome } from './methods/UsersHome';
import { History } from './methods/History';
import { Arenas } from './methods/Arenas';
>>>>>>> 65bb2738dca6bd693a47ea44009cc1f0c3032e16

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
<<<<<<< HEAD
        
=======
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
            <NavItem className='d-flex justify-content-between'>
            <Link to="/" className="btn btn-dark my-3" onClick={() => { window.location.href = "/HistoryAssists" }}>History Assists</Link>
            </NavItem>


          </Container>

        </Navbar>
>>>>>>> 65bb2738dca6bd693a47ea44009cc1f0c3032e16

      
          


      
        <Route  path="/" component={Home} />
          <Route  path="/playersHome" component={PlayersHome} />
          <Route  path="/teamHome" component={TeamHome} />
          <Route path="/addPlayer" component={AddPlayer} />
          <Route path="/addTeam" component={AddTeam} />
          <Route path="/addGames" component={AddGames} />
          <Route path="/addHistoryAssists" component={AddHistoryAssists} />
          <Route path="/gamesHome" component={GamesHome} />
          <Route path="/usersHome" component={UsersHome} />
          <Route path="/Register" component={Register} />
          <Route path="/History" component={History} />
          <Route path="/HistoryAssists" component={HistoryAssists} />
          <Route path="/Arenas" component={Arenas} />
          <Route path="/AddArena" component={AddArena} />
          <Route path="/addHistoryPoints" component={AddHistoryPoints} />
          <Route path="/editPlayer/:id" component={EditPlayer} />
          <Route path="/editHistoryPoints/:id" component={EditHistoryPoints} />
          <Route path="/editTeam/:id" component={EditTeam} />
<<<<<<< HEAD
          <Route path="/editGame/:id" component={EditGame} />
=======
          <Route path="/editHistoryAssists/:id/:nr/:fullName/:points/:gamesPlayed/:turnovers/:imageName" component={EditHistoryAssists} />
          <Route path="/editGame/:id/:team1/:team2/:score/:date" component={EditGame} />
>>>>>>> 65bb2738dca6bd693a47ea44009cc1f0c3032e16
          <Route path="/editUser/:id" component={EditUser} />
          <Route path="/editArena/:id" component={EditArena} />

       
      </Router>

    </div>
  );



}

export default App;
