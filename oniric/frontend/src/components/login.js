import React from 'react'

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: "",
        }
    }

    render() {
        return (
            <div>
                <h2>Login</h2>
                Username
                <input type="text" onChange={(e) => {this.setState({username: e.target.value})}} />
                <br></br>
                Password
                <input type="text" onChange={(e) => {this.setState({password: e.target.value})}} /> 
                <br></br>
                <button onClick={() => {alert("Logado")}}>Login</button>
            </div>
        );
    }

}

export default Login