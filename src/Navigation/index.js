import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import '../App.css';

class Navigation extends Component {
  state ={ activeItem: 'home' }




  handleItemClick = (e, { name }) => this.setState({activeItem: name})

  render()
  {
    const { activeItem } = this.state

  	return (
    <div className='navgation'>
      <div className='social-nav'>
        <ul className='social-ul'>
          <li className='social-li'>
            <a href="https://github.com/SusedCee" target="_blank" className='media-link'>
              <img className='media-image' src='linkedin.svg' alt='LinkedIn Link' />
            </a>
          </li>
          <li className='social-li'> 
            <a href="https://www.linkedin.com/in/sused-cabrera/" target="_blank" className='media-link'>
              <img className='media-image' src='github.svg' alt='GitHub Link' />
            </a>
          </li>
          <li className='social-li'> 
            <a href="https://www.codewars.com/users/Sused" target="_blank" className='media-link'>
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
      </div>
    </div>
  	);
  }
}

export default Navigation;
