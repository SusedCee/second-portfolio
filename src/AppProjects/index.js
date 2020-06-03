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
				<h2>This is the AppProjects component</h2>
			</div>
		)
	}
}

export default AppProjects;