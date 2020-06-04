import React, { Component } from 'react';
//import { Segment, Menu } from 'semantic-ui-react';
import '../App.css';

class Home extends Component {
	constructor(props){
		super(props);

		this.state = {
			//nothing here yet
		}
	}

	render(){
		return (
			<div className="home">
				<h1>Home</h1>
			</div>
		)
	}
}

export default Home;