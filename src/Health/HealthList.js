import React, { Component } from 'react';
import { Card, Image } from 'semantic-ui-react';
import '../App.css';
import HealthData from '../data/Health.json'

class Health extends Component {

	render(){
		return (
		<Card.Group centered>
		{HealthData.map((healthDetail, index) => {
			return (
			    <Card key={ healthDetail.id } >
			      <Image src={healthDetail.image} wrapped ui={false}  />
			      <Card.Content>
			        <Card.Header content={healthDetail.title} />
			      </Card.Content>
			    </Card>
			)
		})}
		</Card.Group>
		)
	}
}

export default Health;