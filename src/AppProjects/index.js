import React, { Component } from 'react';
import { Segment } from 'semantic-ui-react';
import '../App.css';

class AppProjects extends Component {
	constructor(props){
		super(props);

		this.state = {
			//nothing here yet
		}
	}

	render(){
		return (
			<div className="appprojects">
				<Segment>
					<h1>This is the AppProjects component</h1>
				</Segment>
			</div>
		)
	}
}

export default AppProjects;