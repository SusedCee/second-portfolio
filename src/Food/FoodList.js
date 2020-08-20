import React, { Component } from 'react';
import { Card, Image } from 'semantic-ui-react';
import '../App.css';
import FoodData from '../data/Food.json';
import Food from './Food.js';

class FoodList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showList: true,
			post: null
		};
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(e, foodDetail) {
		this.setState({showList: false, post: foodDetail})
	}

	handleGoBackToList(e) {
		this.setState({showList: true})
	}

	render(){
		return (
		this.state.showList ?
			<Card.Group centered>
			{FoodData.map((foodDetail, index) => {
				return (
				    <Card key={ foodDetail.id } onClick={(e) => this.handleClick(e.target, foodDetail)} >
				      <Image src={foodDetail.image} wrapped ui={false}  />
				      <Card.Content>
				        <Card.Header content={foodDetail.title} />
				      </Card.Content>
				    </Card>
				)
			})}
			</Card.Group> :
			<div className='post-div'>
				<p className='go-back-text' onClick={(e) => this.handleGoBackToList(e.target)}>
					<img className='go-back-image' src='left-chevron.svg' alt='Left arrow'/>
				Food List
				</p>
				<Food value={this.state.post} />
				<p className='go-back-text' onClick={(e) => this.handleGoBackToList(e.target)}>
					<img className='go-back-image' src='left-chevron.svg' alt='Left arrow'/>
				Food List
				</p>
			</div>
		)
	}
}

export default FoodList;