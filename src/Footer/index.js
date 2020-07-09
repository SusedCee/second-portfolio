import React, { Component } from 'react';
import { } from 'semantic-ui-react';
import './Footer.css';

class Footer extends Component {

	render(){
		return (
			<div className="footer">
		        <div className='footer-social-nav'>
		          <ul className='footer-social-ul'>
		            <li className='footer-social-li'>
		              <a href="https://github.com/SusedCee" target="_blank" rel="noopener noreferrer" className='media-link'>
		                <img className='footer-media-image' src='linkedin.svg' alt='LinkedIn Link' />
		              </a>
		            </li>
		            <li className='footer-social-li'> 
		              <a href="https://www.linkedin.com/in/sused-cabrera/" target="_blank" rel="noopener noreferrer" className='media-link'>
		                <img className='footer-media-image' src='github.svg' alt='GitHub Link' />
		              </a>
		            </li>
		            <li className='footer-social-li'> 
		              <a href="https://www.codewars.com/users/Sused" target="_blank"  rel="noopener noreferrer" className='media-link'>
		                <img className='footer-media-image' src='codewars.svg' alt='Code Wars Link' />
		              </a>
		            </li>
		          </ul>
		        </div>
		        <div className='footer-blurb'>Built with LOVE using React</div>
			</div>
		)
	}
}

export default Footer;