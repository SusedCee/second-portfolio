import React, { Component } from 'react';
import { } from 'semantic-ui-react';
import '../App.css';
import AppProjectsList from './AppProjectsList';

class AppProjects extends Component {

	render(){
		return (
			<div className="app-projects">
				<h1 className='page-title'>APP PROJECTS</h1>
				<AppProjectsList />
			</div>
		)
	}
}

export default AppProjects;