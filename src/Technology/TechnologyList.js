import React, { Component } from 'react';
import { Card, Image } from 'semantic-ui-react';
import '../App.css';
import TechnologyData from '../data/Technology.json';

class TechnologyList extends Component {

	render(){
		return (
			<Card.Group centered>
			{TechnologyData.map((technologyDetail, index) => {
				return (
				    <Card key={ technologyDetail.id } >
				      <Image src={technologyDetail.image} wrapped ui={false}  />
				      <Card.Content>
				        <Card.Header content={technologyDetail.title} />
				      </Card.Content>
				    </Card>
				)
			})}
			</Card.Group>
		)
	}
}

export default TechnologyList;