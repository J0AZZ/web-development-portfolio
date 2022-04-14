import React from "react"
import ReactDOM from 'react-dom'
// import ReactDOM from "react-dom"
import App from "../App"

class Register extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            username: "",
            password: "",
        }

        this.register = this.register.bind(this)

    }
    register(e) {
        e.preventDefault()
        console.log("Dados inseridos no form: ")
    }
    render() {
        return (
            <div>
                <h2>Register</h2>
                <form onSubmit={this.register}>
                    Username
                    <input type="text" onChange={(e) => {this.setState({username: e.target.value})}} />
                    <br></br>
                    Password
                    <input type="text" onChange={(e) => {this.setState({password: e.target.value})}} />
                    <br></br>
                    <button  onClick={() => {alert("Registrado!")}}>Registrar</button>
                </form>
            </div>
        )
    }
}

export default Register