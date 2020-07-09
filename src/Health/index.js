import React, { Component } from 'react';
import { } from 'semantic-ui-react';
import '../App.css';
import HealthList from './HealthList';

class Health extends Component {

	render(){
		return (
			<div className="health">
				<h1 className="page-title">HEALTH</h1>
				<HealthList />
			</div>
		)
	}
}

export default Health;