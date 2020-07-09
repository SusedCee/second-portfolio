import React, { Component } from 'react';
import { Card, Image } from 'semantic-ui-react';
import '../App.css';
import GardenData from '../data/Garden.json';

class GardenList extends Component {

	render(){
		return (
			<Card.Group centered>
			{GardenData.map((gardenDetail, index) => {
				return (
				    <Card >
				      <Image src={gardenDetail.image} wrapped ui={false}  />
				      <Card.Content>
				        <Card.Header content={gardenDetail.title} />
				      </Card.Content>
				    </Card>
				)
			})}
			</Card.Group>
		)
	}
}

export default GardenList;