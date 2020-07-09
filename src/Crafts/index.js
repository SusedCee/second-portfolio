import React, { Component } from 'react';
import { } from 'semantic-ui-react';
import '../App.css';
import CraftsList from './CraftsList';

class Crafts extends Component {

	render(){
		return (
			<div className="crafts">
				<h1 className="page-title">CRAFTS</h1>
				<CraftsList />
			</div>
		)
	}
}

export default Crafts;