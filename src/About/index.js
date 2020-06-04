import React, { Component } from 'react';
import { Segment } from 'semantic-ui-react';
import '../App.css';

class About extends Component {
	constructor(){
		super();

		this.state = {
			//nothing here yet
		}
	}

	render(){
		return (
			<div className="about">
				<h1>About</h1>
			</div>
		)
	}
}

export default About;