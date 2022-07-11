

import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home } from './methods/Home';
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
import {AddHistoryPoints} from './methods/AddHistoryPoints';
import {EditHistoryPoints} from './methods/EditHistoryPoints';
import {AddHistoryAssists} from './methods/AddHistoryAssists';
import {EditHistoryAssists} from './methods/EditHistoryAssists';
import {ReadMore} from './methods/ReadMore';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Navbar,
  NavItem,
  Container
} from 'reactstrap';
import { HistoryAssists } from './methods/HistoryAssists';




function App() {
  return (
    <div style={{ width: "80%" }}>


      <Router>
        

      
          

      
        <Route  exact path="/" component={Home} />
          <Route  path="/playersHome" component={PlayersHome} />
          <Route  path="/teamHome" component={TeamHome} />
          <Route path="/addPlayer" component={AddPlayer} />
          <Route path="/addTeam" component={AddTeam} />
          <Route path="/addGames" component={AddGames} />
          <Route path="/gamesHome" component={GamesHome} />
          <Route path="/usersHome" component={UsersHome} />
          <Route path="/Register" component={Register} />
          <Route path="/History" component={History} />
          <Route path="/addHistoryAssists" component={AddHistoryAssists} />
          <Route path="/HistoryAssists" component={HistoryAssists} />
          <Route path="/Arenas" component={Arenas} />
          <Route path="/AddArena" component={AddArena} />
          <Route path="/addHistoryPoints" component={AddHistoryPoints} />
          <Route path="/editPlayer/:id" component={EditPlayer} />
          <Route path="/editHistoryPoints/:id" component={EditHistoryPoints} />
          <Route path="/editHistoryAssists/:id" component={EditHistoryAssists} />
          <Route path="/editTeam/:id" component={EditTeam} />
          <Route path="/editGame/:id" component={EditGame} />
          <Route path="/editUser/:id" component={EditUser} />
          <Route path="/editArena/:id" component={EditArena} />
          <Route path="/readArticle/:id" component={ReadMore}/>

          
      </Router>

    </div>
  );



}

export default App;
