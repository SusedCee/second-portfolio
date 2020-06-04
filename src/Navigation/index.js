import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import './Navigation.css';
import Home from '../Home/index.js';
import About from '../About/index.js'
import AppProjects from '../AppProjects/index.js';
import Recipes from '../Recipes/index.js';
import Projects from '../Projects/index.js';
import Literature from '../Literature/index.js';
import Athletics from '../Athletics/index.js';
import Contact from '../Contact/index.js';

class Navigation extends Component {
  state={ activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({activeItem: name})

  render() {
    
    const { activeItem } = this.state
   
    const Page = () => {
      if(this.state.activeItem === 'home') {
        return <Home />
      }
      else if(this.state.activeItem === 'about') {
        return <About />
      }
      else if(this.state.activeItem === 'app projects') {
        return <AppProjects />
      }
      else if(this.state.activeItem === 'recipes') {
        return <Recipes />
      }
      else if(this.state.activeItem === 'projects') {
        return <Projects />
      }
      else if(this.state.activeItem === 'literature') {
        return <Literature />
      }
      else if(this.state.activeItem === 'athletics') {
        return <Athletics />
      }
      else if(this.state.activeItem === 'contact') {
        return <Contact />
      }
    }

  	return (
      <div className='navigation'>
        <div className='social-nav'>
          <ul className='social-ul'>
            <li className='social-li'>
              <a href="https://github.com/SusedCee" target="_blank" rel="noopener noreferrer" className='media-link'>
                <img className='media-image' src='linkedin.svg' alt='LinkedIn Link' />
              </a>
            </li>
            <li className='social-li'> 
              <a href="https://www.linkedin.com/in/sused-cabrera/" target="_blank" rel="noopener noreferrer" className='media-link'>
                <img className='media-image' src='github.svg' alt='GitHub Link' />
              </a>
            </li>
            <li className='social-li'> 
              <a href="https://www.codewars.com/users/Sused" target="_blank"  rel="noopener noreferrer" className='media-link'>
                <img className='media-image' src='codewars.svg' alt='Code Wars Link' />
              </a>
            </li>
          </ul>
        </div>
        <div className='menu-nav'>
        	<Menu className='menu' text vertical>
          		<Menu.Item className='menu-item' name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
          		<Menu.Item className='menu-item' name='about' active={activeItem === 'about'} onClick={this.handleItemClick} />
          		<Menu.Item className='menu-item' name='app projects' active={activeItem === 'app projects'} onClick={this.handleItemClick} />
          		<Menu.Item className='menu-item' name='recipes' active={activeItem === 'recipes'} onClick={this.handleItemClick} />
          		<Menu.Item className='menu-item' name='projects' active={activeItem === 'projects'} onClick={this.handleItemClick} />
          		<Menu.Item className='menu-item' name='literature' active={activeItem === 'literature'} onClick={this.handleItemClick} />
          		<Menu.Item className='menu-item' name='athletics' active={activeItem === 'athletics'} onClick={this.handleItemClick} />
          		<Menu.Item className='menu-item' name='contact' active={activeItem === 'contact'} onClick={this.handleItemClick} />
          </Menu>
          <div className='header-name'>
            <h1> Sused Cabrera </h1>
          </div>
        </div>
        <div className='page'>
          {Page()}
        </div>
      </div>
  	);
  }
}

export default Navigation;
