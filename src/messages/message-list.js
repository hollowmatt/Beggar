import React, { Component } from 'react';
import MessageView from './message-view';

class MessageList extends Component {

	state = {
		messages: [
			{
				from: 'Martha',
				content: 'I will be traveling soon',
				status: 'read'
			},
			{
				from: 'John',
				content: 'Event starts soon',
				status: 'unread'
			},
			{
				from: 'Jacob',
				content: 'Talk later, have fun.',
				status: 'read'
			}
		]
	}

	render() {
		const messageViews = this.state.messages.map(function(message, index){
			return (
			<div className="note">
				<MessageView key={index} message={message} />
			</div>
		)	
		})
		return(
			<div>
				<h1>List of Messages</h1>
				{messageViews}
			</div>
		)
	}
}

export default MessageList;