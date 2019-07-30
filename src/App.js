import React from 'react';
import './App.scss';
import Main from './components/Main';
import Nav from './components/Nav';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import Planets from './components/Planets';


function App() {
  return (
    <Router>
      <div>
      <Nav/>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/planets" component={Planets} />
      </Switch>
      </div>
    </Router>

      );
    }
    
    export default App;
