import React, { Component } from 'react';
import { } from 'semantic-ui-react';
import '../App.css';
import LiteratureList from './LiteratureList';

class Literature extends Component {

	render(){
		return (
			<div className="literature">
				<h1 className="page-title">LITERATURE</h1>
				<LiteratureList />
			</div>
		)
	}
}

export default Literature;