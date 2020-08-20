import React, { Component } from 'react';
import { Card, Image } from 'semantic-ui-react';
import '../App.css';
import CraftsData from '../data/Crafts.json';


class CraftsList extends Component {

	render(){
		return (
				<Card.Group centered>
				{CraftsData.map(( craftsDetail, index) => {
					return (
					    <Card  key={ craftsDetail.id } >
					      <Image src={craftsDetail.image} wrapped ui={false}  />
					      <Card.Content>
					        <Card.Header content={craftsDetail.title} />
					      </Card.Content>
					    </Card>
					)
				})}
				</Card.Group>
		)
	}
}

export default CraftsList;