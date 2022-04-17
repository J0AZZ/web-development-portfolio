import axios from 'axios'
import React from 'react'

import './style/form.css'
class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: "",
        }

        this.handleLogin = this.handleLogin.bind(this)
    }

    handleLogin(e) {
        var username = this.state.username,
            password = this.state.password;

        const response = axios({
            method: "POST",
            url: "http://localhost:3030/signin",
            data: {
                username: username,
                password: password
            } 
        }).then((res) => {
            if(res.data.auth) {
                localStorage.setItem("oniric-user-token", res.data.accessToken)
                localStorage.setItem("username", username)
                alert("Logged.")
                window.location.reload()
            }
        }).catch((err) => {
            alert("Unauthorized by the server!")
            return
        })

    }

    render() {
        return (
            <div class="form">
                <div class="form-container">
                    <div>
                        <h2>Login</h2>
                        Username
                        <input type="text" onChange={(e) => {this.setState({username: e.target.value})}} />
                    </div>
                    <div>
                        Password
                        <input type="password" onChange={(e) => {this.setState({password: e.target.value})}} /> 
                    </div>
                </div>
                <button onClick={this.handleLogin}>Login</button>
            </div>
        );
    }

}

export default Login