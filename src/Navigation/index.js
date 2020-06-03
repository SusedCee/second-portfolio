import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import '../App.css';

export default class Navigation extends Component {
  state ={ activeItem: 'home' }




  handleItemClick = (e, { name }) => this.setState({activeItem: name})

  render()
  {
    const { activeItem } = this.state

  	return (
    <div className='navgation'>
      <div className='social-nav'>
        <ul className='social-ul'>
          <li className='social-item'>
          <a href="https://github.com/SusedCee" target="_blank" className='media-link'>
          <img className='media-image' src='linkedin.svg' alt='LinkedIn Link' /></a></li>
          <li className='social-item'> </li>
          <li className='social-item'> </li>
          <li className='social-item'> </li>
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
