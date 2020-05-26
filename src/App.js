import React, { Component } from 'react';
import './App.css';
import {  } from 'react-router-dom';
//import {createBrowserHistory} from 'history';
 import About from './About';
// import AppProjects from './AppProjects';
// import Contact from './Contact';
// import Home from './Home';
// import Literature from './Literature';
// import Navigation from './Navigation';
// import Outdoors from './Outdoors';
// import Recipes from './Recipes';
import 'semantic-ui-css/semantic.min.css';

//Will have to change code too this at the end of project

class App extends Component 
{

  render() {
    return (
      <div className="App">
      
      <p> This is p</p>
      <About />
      </div>
    );
  }
};


export default App;