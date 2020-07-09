import React, { Component } from 'react';
import { } from 'semantic-ui-react';
import '../App.css';
import FoodList from './FoodList';

class Food extends Component {

	render(){
		return (
			<div className="recipes">
				<h1 className="page-title">FOOD</h1>
				<FoodList />
			</div>
		)
	}
}

export default Food;