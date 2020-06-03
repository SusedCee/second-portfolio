import React, { Component } from 'react';
import { Segment } from 'semantic-ui-react';
import '../App.css';

class Athletics extends Component {
	constructor(props){
		super(props);

		this.state = {
			//nothing here yet
		}
	}

	render(){
		return (
			<div className="athletics">
				<Segment>
					<h1>Athletics</h1>
				</Segment>
			</div>
		)
	}
}

export default Athletics;