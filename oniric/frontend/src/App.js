import Register from "./components/register"
import Login from "./components/login"
import Home from "./components/home"
import  ReactDOM  from "react-dom";
import createRoot from 'react-dom/client'

import './App.css';
import React from "react";

const root = ReactDOM.createRoot(document.getElementById('root'))

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      newOrLogin: "r"
    }
  }

  
  
  render() {
    return (
      <div>
        <Home />
        <button onClick={() => {this.setState({newOrLogin: "l"})}}>
          Já sou usuário
        </button>
        <button onClick={() => {this.setState({newOrLogin: "r"})}}>
          Novo usuário
        </button>
        <div id="loginOrRegister">
          {/*conditional rendering*/}
          {this.state.newOrLogin === "l" && <Login />} 
          {this.state.newOrLogin === "r" && <Register />}
        </div>
  
      </div>
      
    ); 
  }
}

export default App; 

