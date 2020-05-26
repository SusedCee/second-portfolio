import React, { Component } from 'react';
import { Segment } from 'semantic-ui-react';
import '../App.css';

class Contact extends Component {
	constructor(props){
		super(props);

		this.state = {
			//nothing here yet
		}
	}

	render(){
		return (
			<div className="contact">
				<Segment>
					<h1>Contact</h1>
				</Segment>
			</div>
		)
	}
}

export default Contact;