import React, {Component } from 'react';
import api from '../services/api';

import like from '../like.svg';
import './Tweet.css';

export default class Tweet extends Component {
    handleLike = async () => {
        const id = this.props.tweet._id;
        await api.post(`/like/${id}`);
    }

    render() {
        const {tweet} = this.props;
        return (
            <ul className="tweet-list">
                <li className="tweet">
                <strong>{tweet.author}</strong>
                <p>{tweet.content}</p>
                <button 
                    type="button"
                    onClick={this.handleLike}
                >
                    <img src={like} alt="Like!" />
                    {tweet.likes}
                </button>
            </li>
            </ul>
        );
    }
}  