import React, { Component } from 'react';
import { Card, Image } from 'semantic-ui-react';
import '../App.css';
import LitData from '../data/Literature.json';

class LiteratureList extends Component {

	render(){
		return (
			<Card.Group centered>
			{LitData.map((litDetail, index) => {
				return (
				    <Card >
				      <Image src={litDetail.image} wrapped ui={false}  />
				      <Card.Content>
				        <Card.Header content={litDetail.title} />
				      </Card.Content>
				    </Card>
				)
			})}
			</Card.Group>
		)
	}
}

export default LiteratureList;