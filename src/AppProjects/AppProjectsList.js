import React, { Component } from 'react';
import { Card, Image } from 'semantic-ui-react';
import './AppProjects.css';
import '../App.css';
import AppData from '../data/AppProjects.json';

class AppProjectsList extends Component {

	render(){
		return (
			<Card.Group centered>
			{AppData.map((appDetail, index) => {
				return (
				    <Card >
				      <Image src={appDetail.image} wrapped ui={false}  />
				      <Card.Content>
				        <Card.Header content={appDetail.title} />
				      </Card.Content>
				    </Card>
				)
			})}
			</Card.Group>
		)
	}
}

export default AppProjectsList;

