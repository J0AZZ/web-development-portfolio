import React from "react"
import ReactDOM from 'react-dom'
// import ReactDOM from "react-dom"
import App from "../App"
import req from "../api/backend"
import axios from "axios"
class Register extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            username: "",
            password: "",
            email: "",
        }

        this.handleRegister = this.handleRegister.bind(this)
    }

    handleRegister(e) {
        var user = this.state.username, 
            pass = this.state.password,
            email = this.state.email;
        const response = axios({
            method: "POST", 
            url: "http://localhost:3030/signup/",
            data: {
                username: user, 
                password: pass,
                email: email
            }}
        ).then((res) => {
            alert("Usuário registrado com sucesso!\n", res)
            
            window.location.reload()
        })
        // alert("handleRegister:: User successfully registered.")
        console.log(response)
    }

    render() {
        return (
            <div>
                <h2>Register</h2>
                <form>
                    Email
                    <input type="text" onChange={(e) => {this.setState({email: e.target.value})}} />
                    <br></br>
                    Username
                    <input type="text" onChange={(e) => {this.setState({username: e.target.value})}} />
                    <br></br>
                    Password
                    <input type="password" onChange={(e) => {this.setState({password: e.target.value})}} />
                    <br></br>

                    <button  onClick={this.handleRegister}>Registrar</button>
                </form>
            </div>
        )
    }
}

export default Register