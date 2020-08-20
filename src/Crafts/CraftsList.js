import React, { Component } from 'react';
import { Card, Image } from 'semantic-ui-react';
import '../App.css';
import CraftsData from '../data/Crafts.json';
import Craft from './Crafts.js';

class CraftsList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showList: true,
			post: null
		};
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(e, craftDetail) {
		this.setState({showList: false, post: craftDetail})
	}

	handleGoBackToList(e) {
		this.setState({showList: true})
	}
	render(){
		return (
			this.state.showList ?
				<Card.Group centered>
				{CraftsData.map(( craftDetail, index) => {
					return (
					    <Card  key={ craftDetail.id } onClick={(e) => this.handleClick(e.target, craftDetail)} >
					      <Image src={craftDetail.image} wrapped ui={false}  />
					      <Card.Content>
					        <Card.Header content={craftDetail.title} />
					      </Card.Content>
					    </Card>
					)
				})}
				</Card.Group> :
				<div className='post-div'>
					<p className='go-back-text' onClick={(e) => this.handleGoBackToList(e.target)}>
						<img className='go-back-image' src='left-chevron.svg' alt='Left arrow'/>
					Crafts List
					</p>
					<Craft value={this.state.post} />
					<p className='go-back-text' onClick={(e) => this.handleGoBackToList(e.target)}>
						<img className='go-back-image' src='left-chevron.svg' alt='Left arrow'/>
					Crafts List
					</p>
				</div>
		)
	}
}

export default CraftsList;