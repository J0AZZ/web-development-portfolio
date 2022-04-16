import Register from "./components/register"
import Login from "./components/login"
import Home from "./components/home"
import  ReactDOM  from "react-dom";
import createRoot from 'react-dom/client'
import PersonalTL from './components/personaltl'

import './App.css';
import React from "react";

const root = ReactDOM.createRoot(document.getElementById('root'))

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      newOrLogin: "r",
      logged: !(localStorage.getItem("oniric-user-token").length == 0)
    }
  }

  
  
  render() {
    return (
      <div>
        <Home />
        {
          !this.state.logged
          
          &&
          
          <div>
            <button onClick={() => {this.setState({newOrLogin: "l"})}}>
              Já sou usuário
            </button>
            <button onClick={() => {this.setState({newOrLogin: "r"})}}>
              Novo usuário
            </button>
          </div>
        }
        <div id="main-content">
          {/*conditional rendering*/}
          {!this.state.logged && this.state.newOrLogin === "l" && <Login />} 
          {!this.state.logged && this.state.newOrLogin === "r" && <Register />}
          {(localStorage.getItem('oniric-user-token').length > 0) && <PersonalTL user={localStorage.getItem("username")}/>}
          
        </div>
  
      </div>
      
    ); 
  }
}

export default App; 

