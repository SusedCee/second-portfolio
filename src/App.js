import React, { Component } from 'react';
import './App.css';
import Navigation from './Navigation';
//import {createBrowserHistory} from 'history';
// import About from './About';
// import AppProjects from './AppProjects';
// import Contact from './Contact';
// import Home from './Home';
// import Literature from './Literature';
// import Outdoors from './Outdoors';
// import Recipes from './Recipes';
import 'semantic-ui-css/semantic.min.css';

//Will have to change code too this at the end of project

class App extends Component 
{

  render() {
    return (
      <div className="App">
      <Navigation />
      <div className='header'>

      <h1> Sused Cabrera </h1>
      </div>

      </div>
    );
  }
};


export default App;

      //<img src=''  alt='Sused Image'/>