import React, { Component } from 'react';
import { Card, Image } from 'semantic-ui-react';
import '../App.css';
import HealthData from '../data/Health.json'
import Health from './Health';

class HealthList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showList: true,
			post: null
		};
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(e, healthDetail) {
		this.setState({showList: false, post: healthDetail})
	}

	handleGoBackToList(e) {
		this.setState({showList: true})
	}

	render(){
		return (
		this.state.showList ?
			<Card.Group centered>
			{HealthData.map((healthDetail, index) => {
				return (
				    <Card key={ healthDetail.id }  onClick={(e) => this.handleClick(e.target, healthDetail)} >
				      <Image src={healthDetail.image} wrapped ui={false}  />
				      <Card.Content>
				        <Card.Header content={healthDetail.title} />
				      </Card.Content>
				    </Card>
				)
			})}
			</Card.Group> :
			<div className='post-div'>
				<p className='go-back-text' onClick={(e) => this.handleGoBackToList(e.target)}>
					<img className='go-back-image' src='left-chevron.svg' alt='Left arrow'/>
				Health List
				</p>
				<Health value={this.state.post} />
				<p className='go-back-text' onClick={(e) => this.handleGoBackToList(e.target)}>
					<img className='go-back-image' src='left-chevron.svg' alt='Left arrow'/>
				Health List
				</p>
			</div>
		)
	}
}

export default HealthList;