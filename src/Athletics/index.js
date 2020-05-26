import React, { Component } from 'react';
import { Segment } from 'semantic-ui-react';
import '../App.css';

class Outdoors extends Component {
	constructor(props){
		super(props);

		this.state = {
			//nothing here yet
		}
	}

	render(){
		return (
			<div className="outdoors">
				<Segment>
					<h1>Outdoors</h1>
				</Segment>
			</div>
		)
	}
}

export default Outdoors;