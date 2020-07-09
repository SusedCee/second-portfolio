import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import './Navigation.css';

class Navigation extends Component {
  state={ activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({activeItem: name})

  render() {

    const { activeItem } = this.state

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
            <li className='social-li'> 
              <a href="https://twitter.com/SusedC" target="_blank"  rel="noopener noreferrer" className='media-link'>
                <img className='media-image' src='twitter.svg' alt='Code Wars Link' />
              </a>
            </li>
          </ul>
        </div>
        <div className='menu-nav'>
        	<Menu className='menu' text vertical>
        		<Menu.Item className='menu-item' name='home' active={activeItem === 'home'} onClick={this.handleItemClick} as={Link} to='/'/>
        		<Menu.Item className='menu-item' name='about' active={activeItem === 'about'} onClick={this.handleItemClick} as={Link} to='/about'/>
            <Menu.Item className='menu-item' name='app projects' active={activeItem === 'app projects'} onClick={this.handleItemClick} as={Link} to='/appprojects'/>
        		<Menu.Item className='menu-item' name='technology' active={activeItem === 'technology'} onClick={this.handleItemClick} as={Link} to='/technology'/>
        		<Menu.Item className='menu-item' name='garden' active={activeItem === 'garden'} onClick={this.handleItemClick} as={Link} to='/garden'/>
            <Menu.Item className='menu-item' name='food' active={activeItem === 'food'} onClick={this.handleItemClick} as={Link} to='/food'/>
        		<Menu.Item className='menu-item' name='crafts' active={activeItem === 'crafts'} onClick={this.handleItemClick} as={Link} to='/crafts'/>
            <Menu.Item className='menu-item' name='health' active={activeItem === 'health'} onClick={this.handleItemClick} as={Link} to='/health'/>
        		<Menu.Item className='menu-item' name='literature' active={activeItem === 'literature'} onClick={this.handleItemClick} as={Link} to='/literature'/>
        		<Menu.Item className='menu-item' name='contact' active={activeItem === 'contact'} onClick={this.handleItemClick} as={Link} to='/contact'/>
          </Menu>
          <div className='header-name'>
            <h1 className='name'> Sused Cabrera </h1>
          </div>
        </div>
      </div>
  	);
  }
}

export default Navigation;
