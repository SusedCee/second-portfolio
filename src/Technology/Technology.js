import React, { Component } from 'react';
import { Container, Image, Header, Button, Divider } from 'semantic-ui-react';
import '../App.css';

class Technology extends Component {

	render(value){
		return (
			<Container text className='post-div'>			
				<Image fluid src={this.props.value.image} />
				<Header as='h5'>{this.props.value.date}</Header>
			    <Header as='h2'>{this.props.value.title} </Header>
			    {this.props.value.description.map((paragraph, index) => {
			    	return <p paragraph={paragraph} key={index}>{paragraph}</p>
			    	})
				}
				<Divider />
				<p>Link to resources: 
					<a target="_blank" href={this.props.value.link} >{this.props.value.link}</a>
				</p>
			</Container>
		)
	}
}

export default Technology;