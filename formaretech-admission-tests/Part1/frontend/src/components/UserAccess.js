import React from 'react';
import ChatEnv from './ChatEnv';
import { Redirect } from 'react-router-dom';

export default class UserAccess extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            user: ''
        }
        this.enterChat = this.enterChat.bind(this);
        this.setUsername = this.setUsername.bind(this);
    }

    setUsername(e) {
        this.setState({user: e.target.value});
    }

    enterChat(e) {
        e.preventDefault();
        this.setState({username: this.state.user});
    }
    
    render() {
        if(this.state.username !== '')
        {
            return <ChatEnv user={this.state.username} />
        }
        return (
            <div>
                <h1>User's Login Page</h1>
                <form onSubmit={this.enterChat}>
                    <input type="text"
                           placeholder="enter your username"
                           width="150px"
                           onChange={this.setUsername}
                    />
                    <button type="submit">
                        LOGIN
                    </button>
                </form>
            </div>
        )
    }
}