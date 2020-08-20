import React, { Component } from 'react';
import { Container, Image, Header, Button, Divider, List } from 'semantic-ui-react';
import '../App.css';

class Food extends Component {

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
				<Header as='h3'>Ingredients</Header>
				<List>
				    {this.props.value.ingredients.map((ingredient, index) => {
				    	return <List.Item ingredient={ingredient} key={index}>• {ingredient}</List.Item>
				    	})
					}
				</List>
				<Header as='h3'>Directions</Header>
				{this.props.value.directions.map((direction, index) => {
			    	return <p directions={direction} key={index}>{direction}</p>
			    	})
				}
				<Header as='h3'>Tips</Header>
				{this.props.value.tips.map((tip, index) => {
			    	return <p tips={tip} key={index}>{tip}</p>
			    	})
				}
				<Divider />
				<p>
				Recipe Inspiration:
					<a target="_blank" href={this.props.value.recipeInspiration}>
					{this.props.value.recipeInspiration}
					</a>
				</p>
			</Container>
		)
	}
}

export default Food;

			 //    {this.props.value.ingredients.map((ingredient, index) => {
			 //    	return 
			 //    		<p ingredient={ingredient} key={index}>{ingredient}</p>
			 //    	})
				// }

				
				// {this.props.value.directions.map((directions, index) => {
			 //    	return 
			 //    		<p directions={directions} key={index}>{directions}</p>
			 //    	})
				// }