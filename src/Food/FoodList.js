import React, { Component } from 'react';
import { Card, Image } from 'semantic-ui-react';

import '../App.css';
import RecipeData from '../data/Food.json';

class RecipesList extends Component {

	render(){
		return (
				<Card.Group centered>
				{RecipeData.map((recipeDetail, index) => {
					return (
					    <Card >
					      <Image src={recipeDetail.image} wrapped ui={false}  />
					      <Card.Content>
					        <Card.Header content={recipeDetail.title} />
					      </Card.Content>
					    </Card>
					)
				})}
				</Card.Group>
		)
	}
}

export default RecipesList;