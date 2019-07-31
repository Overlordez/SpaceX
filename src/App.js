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
import Space from './components/Space';


 class App extends React.Component {
   constructor(props){
     super();

   }

   componentWillUnmount() {
    document.body.classList.remove('body')
}
 render(){

  return (
    <Router>
      <div>
       <audio loop autoPlay  >
  <source src="music.mp3" />
</audio> 
      <Nav/>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route  path="/planets" component={Planets} />
        <Route  path="/space" component={Space}/>
      </Switch>
      </div>
    </Router>

      );
 }
  
    }
    
    export default App;
