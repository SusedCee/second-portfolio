import React, { Component } from 'react';
import { Card, Image } from 'semantic-ui-react';
import './AppProjects.css';
import '../App.css';
import AppData from '../data/AppProjects.json';
import AppProject from './AppProject.js';

class AppProjectsList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showList: true,
			post: null
		};
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(e, appDetail) {
		this.setState({showList: false, post: appDetail})
	}

	handleGoBackToList(e) {
		this.setState({showList: true})
	}

	render(){
		return(
		this.state.showList ?
			<Card.Group centered>
			{AppData.map((appDetail, index) => {
				return (
				    <Card key={ appDetail.id } onClick={(e) => this.handleClick(e.target, appDetail)}>
				      <Image src={appDetail.image} wrapped ui={false}  />
				      <Card.Content>
				        <Card.Header content={appDetail.title} />
				      </Card.Content>
				    </Card>
				)
			})}
			</Card.Group> :
			<div className='post-div'>
				<p className='go-back-text' onClick={(e) => this.handleGoBackToList(e.target)}>
					<img className='go-back-image' src='left-chevron.svg' alt='Code Wars Link'/>
				App List
				</p>
				<AppProject value={this.state.post} />
				<p className='go-back-text' onClick={(e) => this.handleGoBackToList(e.target)}>
					<img className='go-back-image' src='left-chevron.svg' alt='Code Wars Link'/>
				App List
				</p>
			</div>
		)


	}
}

export default AppProjectsList;