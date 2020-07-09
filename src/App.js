import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import Navigation from './Navigation';
import Home from './Home/index.js';
import About from './About/index.js'
import AppProjects from './AppProjects/index.js';
import Technology from './Technology/index.js';
import Garden from './Garden/index.js';
import Food from './Food/index.js';
import Crafts from './Crafts/index.js';
import Health from './Health/index.js';
import Literature from './Literature/index.js';
import Contact from './Contact/index.js';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
	   	<Router>
	      <div className="App">
		      <Navigation />	
		      <Switch>
		      	<Route path='/' exact component={Home} />
		      	<Route path='/about' component={About} />
		      	<Route path='/appprojects' component={AppProjects} />
		      	<Route path='/technology' component={Technology} />
		      	<Route path='/garden' component={Garden} />
		      	<Route path='/food' component={Food} />
		      	<Route path='/crafts' component={Crafts} />
		      	<Route path='/health' component={Health} />
		      	<Route path='/literature' component={Literature} />
		      	<Route path='/contact' component={Contact} />
		      </Switch>
		      <Footer />
	      </div>
	    </Router>
    );
  }
};

export default App;