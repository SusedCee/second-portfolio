import React, { Component } from 'react';
import { Segment } from 'semantic-ui-react';
import '../App.css';

class Recipes extends Component {
	constructor(props){
		super(props);

		this.state = {
			//nothing here yet
		}
	}

	render(){
		return (
			<div className="recipes">
				<Segment>
					<h1>Recipes</h1>
				</Segment>
			</div>
		)
	}
}

export default Recipes;