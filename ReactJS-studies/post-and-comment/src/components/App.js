import React from 'react';
import Post from './Post';

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = 
        {
            posts: [],
            newPostTitle: '',
            newPostText: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);

    }
    
    handleSubmit(e) {
        e.preventDefault();

        this.setState({
            posts: [
                ...this.state.posts,
                { title: this.state.newPostTitle,
                  text: this.state.newPostText }
            ]
        });
        this.setState({ newPostTitle: '' });
        this.setState({ newPostText: ''});
        console.log(this.state.posts)
        e.preventDefault();

    }

    handleTitleChange(e) {
        this.setState({
            newPostTitle: e.target.value
        });
    }

    handleTextChange(e) {
        this.setState({
            newPostText: e.target.value
        });
    }

    render() {
        //always return only one parent, no matter how many childrens 
        return (
            <div>
                <h1>Post & Comment</h1>
                <form onSubmit={this.handleSubmit}>
                    <input value={this.state.newPostTitle}
                           onChange={this.handleTitleChange}
                           type="text"
                           placeholder="Post's title" />
                    <input value={this.state.newPostText}
                           onChange={this.handleTextChange}
                           type="text"
                           placeholder="Write something here" />
                    <button type="submit">Post it!</button>
                </form>
                <br />
                {this.state.posts.map((post, index) => { return <Post key={index} title={post.title} text={post.text} />; })}
            </div>
        );
    }
}