import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';
import '../App.css';
import About from '../About';
import AppProjects from '../AppProjects';
import Contact from '../Contact';
import Home from '../Home';
import Literature from '../Literature';
import Outdoors from '../Outdoors';
import Recipes from '../Recipes';

class Navigation extends Component {
  constructor(props)
  	{
	  super(props);
	  this.state = 
      {
		//nothing here yet
	  }
  	}
}

  handleHomeClick = () =>
  {
	this.props.history.push('/home');
  }

  handleAboutClick = () =>
  {
  	this.props.history.push('/about');
  }

  handleAppProjectsClick = () =>
  {
  	this.props.history.push('/appprojects');
  }

  handleRecipesClick = () =>
  {
  	this.props.history.push('/recipes');
  }

  handleProjectsClick = () =>
  {
  	this.props.history.push('/projects');
  }
  handleLiteratureClick = () =>
  {
  	this.props.history.push('/literature');
  }
  handleOutdoorsClick = () =>
  {
  	this.props.history.push('/outdoors');
  }
  handleContactClick = () =>
  {
  	this.props.history.push('/contact');
  }

  render()
  {
  	return (

  	<div>
  		<Menu>
  		<Menu.Item>
  			<img name='icon'src='favicon.png' alt='icon' />
  		</Menu.Item>
  		<Menu.Item name='home' href={handleHomeClick()}  >
  			Home
  		</Menu.Item>
  		<Menu.Item name='about' href='/about'>
  			About
  		</Menu.Item>
  		<Menu.Item name='appprojects' href='/appprojects'>
  			App Projects
  		</Menu.Item>
  		<Menu.Item name='recipes' href='/recipes'>
  			Recipes
  		</Menu.Item>
  		<Menu.Item name='projects' href='/projects'>
  			Projects
  		</Menu.Item>
  		<Menu.Item name='literature' href='/literature'>
  			Literature
  		</Menu.Item>
  		<Menu.Item name='outdoors' href='/outdoors'>
  			Outdoors
  		</Menu.Item>
  		<Menu.Item name='contact' href='/contact'>
  			Contact
  		</Menu.Item>
	</Menu>
	</div>
  	);
  }

export default Navigation;


          // <Switch>
          //   <Route 
          //     exact path='/register' 
          //     render={(routeProps) => (<Register {...routeProps} 
          //     handleLogin={this.handleLogin} />)} 
          //   />
          //   <Route 
          //     exact path='/login' 
          //     render={(routeProps) => (<Login {...routeProps} 
          //     handleLogin={this.handleLogin}/>)} 
          //   />
          //   <Route 
          //     exact path='/parks' 
          //     render={(routeProps) => (<ParkContainer {...routeProps} />)} 
          //   />
          //   <Route 
          //     exact path='/profile' 
          //     render={(routeProps) => (<UserContainer {...routeProps} 
          //     user={this.state.user} 
          //     updateOneUser={this.updateOneUser}/>)}
          //   />
          //   <Route component={My404}/>
          // </Switch>