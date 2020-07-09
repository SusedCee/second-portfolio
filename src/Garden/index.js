import React, { Component } from 'react';
import { } from 'semantic-ui-react';
import '../App.css';
import GardenList from './GardenList';

class Garden extends Component {

	render(){
		return (
			<div className="garden">
				<h1 className="page-title">GARDEN</h1>
				<GardenList />
			</div>
		)
	}
}

export default Garden;