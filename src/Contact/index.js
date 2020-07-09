import React, { Component } from 'react';
import { Form, Container, Message } from 'semantic-ui-react';
import '../App.css';
import axios from 'axios';

class Contact extends Component {

    constructor(props) {
	  super(props);
	  this.state = {
  	  name: '',
  	  email: '',
  	  message: '',
  	  disbaled: false,
  	  emailSent: null,
	  }
	  // this.handleChange = this.handleChange.bind(this)
    }

	handleChange = (event) => {
		const target = event.target;
		const value = target.type === 'checkbox' ? target.checked : target.value;
		const name = target.name;

		this.setState({
			[name]: value
		})
	}

	// handleChange = (event) => {
	// 	this.setState({
	// 		[event.target.name]: event.target.value
	// 	})
	// }

	handleSubmit = (event)  => {
		event.preventDefault()

		this.setState({
			disabled: true
		})

		axios.post('http://localhost:3030/api/email', this.state)
		.then(res => {
			if(res.data.success) {
				this.setState({
					disabled: false,
					emailSent: true
				});
			} else {
				this.setState({
					disabled: false,
					emailSent: false
				});
			}
		})
		.catch(err => {
			console.log(err);
			this.setState({
				disabled: false,
				emailSent: false
			});
		})
	}

	render(){
		// const { value } = this.state
		console.log(this.state);
		return (
			<div className='contact' >
				<h1 className="page-title">CONTACT ME</h1>
			  	<Container text textAlign='center'>
					<p>Please fill out the form and I will get back to you as soon as possible</p>
			  	</Container>
			    <Form onSubmit={this.handleSubmit} >
			      <Form.Group widths='equal'>
			        <Form.Input 
			        fluid 
			        label='Name' 
			        placeholder='Name*' 
			        id='form-input-name' 
			        type='text'
			        name='name'
			        onChange={this.handleChange}
			        value={this.state.name}
			        />
			        <Form.Input 
			        fluid 
			        label='Email' 
			        placeholder='Email*' 
			        id='form-input-email' 
			        type='email'
			        name='email'
			        onChange={this.handleChange}
			        value={this.state.email}
			        />
			      </Form.Group>
			      <Form.TextArea 
			      label='Message' 
			      placeholder='Message*'
			      name='message'
			      type='textarea'
			      onChange={this.handleChange} 
			      value={this.state.message}
			      />
			      <Form.Button type='submit' disabled={this.state.disabled}>Submit Message</Form.Button>
			      {this.state.emailSent === true && 
			      	<Message positive>
				      	<Message.Header>SUCCESS</Message.Header>
				      	<p>Email Sent</p>
			      	</Message>
			      }
			      {this.state.emailSent === false && 
			      	<Message negative>
				      	<Message.Header>ERROR</Message.Header>
				      	<p>Email Not Sent</p>
			      	</Message>
			      }
			    </Form>
		    </div>
		)
	}
}

export default Contact;
