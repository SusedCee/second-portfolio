import React, { Component } from 'react';
import { Container, Image, Header, Button, Divider } from 'semantic-ui-react';
import '../App.css';

class AppProject extends Component {

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
				<p>Technology used: {this.props.value.technology}</p>
			    <Button as='a' target="_blank" href={this.props.value.link}>
				Go to the Application
				</Button>
			</Container>
		)
	}
}

export default AppProject;