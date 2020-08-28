import React, { Component } from 'react';
import { Card, Image } from 'semantic-ui-react';
import '../App.css';
import LitData from '../data/Literature.json';
import Literature from './Literature.js';

class LiteratureList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showList: true,
			post: null
		};
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(e, litDetail) {
		this.setState({showList: false, post: litDetail})
	}

	handleGoBackToList(e) {
		this.setState({showList: true})
	}

	render(){
		return (
		this.state.showList ?
			<Card.Group centered>
			{LitData.map((litDetail, index) => {
				return (
				    <Card key={ litDetail.id } onClick={(e) => this.handleClick(e.target, litDetail)} >
				      <Image src={litDetail.image} wrapped ui={false}  />
				      <Card.Content>
				        <Card.Header content={litDetail.title} />
				      </Card.Content>
				    </Card>
				)
			})}
			</Card.Group> :
			<div className='post-div'>
				<p className='go-back-text' onClick={(e) => this.handleGoBackToList(e.target)}>
					<img className='go-back-image' src='left-chevron.svg' alt='Left arrow'/>
				Literature List
				</p>
				<Literature value={this.state.post} />
				<p className='go-back-text' onClick={(e) => this.handleGoBackToList(e.target)}>
					<img className='go-back-image' src='left-chevron.svg' alt='Left arrow'/>
				Literature List
				</p>
			</div>
		)
	}
}

export default LiteratureList;