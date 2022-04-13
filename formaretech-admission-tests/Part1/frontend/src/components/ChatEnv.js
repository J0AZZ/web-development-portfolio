import React from 'react';
import Message from './Message';

export default class ChatEnv extends React.Component {
    constructor(props) {
        super(props);

        this.state = 
        {
            render: false,
            messages: [],
            newMessage: '',
            message: {
                user: this.props.loggedUser,
                message: '',
                date: new Date()
            }
        }
        
        this.onMessageChange = this.onMessageChange.bind(this);
        this.onMessageSubmit = this.onMessageSubmit.bind(this);
    }

    onMessageChange(e) {
        this.setState({newMessage: e.target.value});
    }

    onMessageSubmit(e) {
        e.preventDefault();
        this.setState({
            message: 
            {
                
                message: this.state.newMessage,
                date: new Date()
            }
        }, () => 
        this.setState({
            messages: 
            [...this.state.messages,
                this.state.message]}));
        this.setState({render: true});
        
        
        this.setState({
            newMessage: ''
        });

    }

    render() {
        if(this.state.render)
        {
            return (
                <div className="Chat">
                    <div className="userArea">
                    <h3>Logged as {this.props.user} </h3>
                        <form onSubmit={this.onMessageSubmit}>
                            <input 
                                type="text"
                                placeholder="say something"
                                value={this.state.newMessage}
                                onChange={this.onMessageChange}
                                width="200px"
                                height="100px"
                            />
                            <button type="submit">
                                SEND
                            </button>
                        </form>
                    </div>
                    <div className="chatArea">
                        
                        {
                            this.state.messages.map((msg, index) => { 
                            return (
                                <Message key={index}
                                    user={this.props.user} 
                                    message={msg.message} 
                                    date={msg.date}
                                />);
                            })
                        }
                    </div>
                </div>
            )
        }


        return (
            <div className="Chat">
                <div className="userArea">
                <h3>Logged as {this.props.user} </h3>
                    <form onSubmit={this.onMessageSubmit}>
                        <input 
                            type="text"
                            placeholder="say something"
                            value={this.state.newMessage}
                            onChange={this.onMessageChange}
                            width="200px"
                            height="100px"
                        />
                        <button type="submit">
                            SEND
                        </button>
                    </form>
                </div>
            </div>
        )
    }
}