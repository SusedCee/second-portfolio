import React, { Component } from 'react';
import { } from 'semantic-ui-react';
import '../App.css';
import TechnologyList from './TechnologyList';

class Technology extends Component {

	render(){
		return (
			<div className="technology">
				<h1 className="page-title">TECHNOLOGY</h1>
				<TechnologyList />
			</div>
		)
	}
}

export default Technology;