import React, { Component } from 'react';
import { Segment } from 'semantic-ui-react';
import '../App.css';

class Projects extends Component {
	constructor(props){
		super(props);

		this.state = {
			//nothing here yet
		}
	}

	render(){
		return (
			<div className="projects">
				<Segment>
					<h1>Projects</h1>
				</Segment>
			</div>
		)
	}
}

export default Projects;