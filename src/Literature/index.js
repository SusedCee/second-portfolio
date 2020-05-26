import React, { Component } from 'react';
import { Segment } from 'semantic-ui-react';
import '../App.css';

class Literature extends Component {
	constructor(props){
		super(props);

		this.state = {
			//nothing here yet
		}
	}

	render(){
		return (
			<div className="literature">
				<Segment>
					<h1>Literature</h1>
				</Segment>
			</div>
		)
	}
}

export default Literature;