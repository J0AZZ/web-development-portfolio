import axios from 'axios';
import React from 'react';

import './style/form.css'

class CreateDream extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: "",
            content: "",
            private: 0,
        }

        this.handleCreate = this.handleCreate.bind(this)
    }

    handleCreate() {
        const user = localStorage.getItem("username")

        const response = axios({
            method: "POST",
            url: "http://localhost:3030/"+ user +"/create",
            data: {
                dreamer: user,
                title: this.state.title,
                content: this.state.content,
                private: this.state.private
            },
            headers: {
                "x-access-token": localStorage.getItem("oniric-user-token")
            }
        }).then((res) => {
            alert("Your dream is safe in the clouds.")
            console.log(res)
            window.location.reload()
        }).catch((err) => {
            alert("Some error ocurred!")
            window.location.reload()
        })
    }

    render() {
        return (
            <div class="form">
                <h3>New Dream</h3>
                <button onClick={() => {this.setState({private: 0})}}>Private</button>
                {/* <button onClick={() => {this.setState({private: 1})}}>Whitelisted</button> */}
                <button onClick={() => {this.setState({private: 2})}}>Public</button>
                <form>
                    <br></br>
                    <div>
                        <div>Title</div>
                        <input class="title-input" type="text" onChange={(e) => {this.setState({title: e.target.value})}}></input>
                        <br></br>
                        
                        <div>Content</div>
                        <br></br>
                        <textarea class="content-container" type="text" onChange={(e) => {this.setState({content: e.target.value})}}></textarea>
                    </div>
                    
                    <br></br>
                    <button onClick={this.handleCreate}>Save</button>
                    <br></br>
                    <button onClick={() => {window.location.reload()}}>Cancel</button>
                </form>
            </div>
        );
    }

}

export default CreateDream
