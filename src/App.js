import React from 'react';
import './App.scss';
import Main from './components/Main'
import Nav from './components/Nav';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import Space from './components/Space';
import Galaxy from './components/secondComponent/Galaxy';
import Star from  './components/secondComponent/Star';
import Planet from './components/secondComponent/Planet';
import Nebula from './components/secondComponent/Nebula';
import BlackHole from './components/secondComponent/BlackHole';
import About from './components/About';
import Project from './components/Project';



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
          
      <Nav/> 
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/aboutus" component={About}/>
        <Route exact path="/space"  component={Space}/>
        <Route path="/project" component={Project}/>
        <Route path="/nebula" component={Nebula}/>
        <Route path="blackhole" component={BlackHole}/>
        <Route path="/galaxy"  component={Galaxy}/>
        <Route path="/star" component={Star}/>
        <Route path="/planet" component={Planet}/>
        <Route path="/nebula" component={Nebula}/>
        <Route path="/blackHole" component={BlackHole}/>
      </Switch>
      </div>
    </Router>

      );
 }
  
    }
    
    export default App;
