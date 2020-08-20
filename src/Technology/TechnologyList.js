import React, { Component } from 'react';
import { Card, Image } from 'semantic-ui-react';
import '../App.css';
import TechnologyData from '../data/Technology.json';
import Technology from './Technology.js';

class TechnologyList extends Component {	
	constructor(props) {
		super(props);
		this.state = {
			showList: true,
			post: null
		};
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(e, technologyDetail) {
		this.setState({showList: false, post: technologyDetail})
	}

	handleGoBackToList(e) {
		this.setState({showList: true})
	}

	render(){
		return (
		this.state.showList ?
			<Card.Group centered>
			{TechnologyData.map((technologyDetail, index) => {
				return (
				    <Card key={ technologyDetail.id } onClick={(e) => this.handleClick(e.target, technologyDetail)} >
				      <Image src={technologyDetail.image} wrapped ui={false}  />
				      <Card.Content>
				        <Card.Header content={technologyDetail.title} />
				      </Card.Content>
				    </Card>
				)
			})}
			</Card.Group> :
			<div className='post-div'>
				<p className='go-back-text' onClick={(e) => this.handleGoBackToList(e.target)}>
					<img className='go-back-image' src='left-chevron.svg' alt='Left arrow'/>
				Technology List
				</p>
				<Technology value={this.state.post} />
				<p className='go-back-text' onClick={(e) => this.handleGoBackToList(e.target)}>
					<img className='go-back-image' src='left-chevron.svg' alt='Left arrow'/>
				Technology List
				</p>
			</div>
		)
	}
}

export default TechnologyList;