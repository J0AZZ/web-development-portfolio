import React, { Component } from 'react';
import api from '../services/api';
import Tweet from '../components/Tweet'
import socket from 'socket.io-client';

import twitterLogo from '../twitter.svg';
import './Timeline.css';

export default class Login extends Component {
    state = {
        tweets: [],
        newTweet: '',
    }

    async componentDidMount() {
        const response = await api.get('tweets');
        this.setState({tweets: response.data});
        this.subscribeToEvents();
    }

    handleInputChange = (e) => {
        this.setState({newTweet: e.target.value});
    }

    handleNewTweet = async (e) => {
        if(e.keyCode !== 13) return;
        const content = this.state.newTweet;
        const author = localStorage.getItem("@TwitterClone:username");
        await api.post('tweet', {content, author});
        this.setState({newTweet: ''});
    }

    subscribeToEvents = () => {
        const io = socket('http://localhost:3000');
        io.on('tweet', (data) => {
            this.setState({tweets: [data, ...this.state.tweets]});
        });
        io.on('like', (data) => {
            this.setState({tweets: this.state.tweets.map(tweet => {
                tweet._id === data._id ? data : tweet;
            })});
        });
    }

    render() {
        return (
            <div className="timeline-wrapper">
                <img height={24} src={twitterLogo} alt="Twitter Clone" />
                <form>
                    <textarea
                        value={this.state.newTweet}
                        onChange={this.handleInputChange}
                        onKeyDown={this.handleNewTweet}
                        placeholder="What is happening?"
                    />
                </form>
                {this.state.tweets.map(tweet => <Tweet key={tweet._id} tweet={tweet} />)}
            </div>
        );
    }
}