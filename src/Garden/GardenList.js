import React, { Component } from 'react';
import { Card, Image } from 'semantic-ui-react';
import '../App.css';
import GardenData from '../data/Garden.json';
import Garden from './Garden.js';

class GardenList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showList: true,
			post: null
		};
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(e, gardenDetail) {
		this.setState({showList: false, post: gardenDetail})
	}

	handleGoBackToList(e) {
		this.setState({showList: true})
	}
	render(){
		return (
		this.state.showList ?
			<Card.Group centered>
			{GardenData.map((gardenDetail, index) => {
				return (
				    <Card key={ gardenDetail.id } onClick={(e) => this.handleClick(e.target, gardenDetail)} > 
				      <Image src={gardenDetail.image} wrapped ui={false}  />
				      <Card.Content>
				        <Card.Header content={gardenDetail.title} />
				      </Card.Content>
				    </Card>
				)
			})}
			</Card.Group> :
			<div className='post-div'>
				<p className='go-back-text' onClick={(e) => this.handleGoBackToList(e.target)}>
					<img className='go-back-image' src='left-chevron.svg' alt='Left arrow'/>
				Garden List
				</p>
				<Garden value={this.state.post} />
				<p className='go-back-text' onClick={(e) => this.handleGoBackToList(e.target)}>
					<img className='go-back-image' src='left-chevron.svg' alt='Left arrow'/>
				Garden List
				</p>
			</div>
		)
	}
}

export default GardenList;