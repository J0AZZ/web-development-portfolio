import Register from "./components/register"
import Login from "./components/login"
import Home from "./components/home"
import PersonalTL from './components/personaltl'
import PublicTL from './components/publictl'

import  ReactDOM  from "react-dom";
import React from "react";

import './App.css';

const root = ReactDOM.createRoot(document.getElementById('root'))

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      newOrLogin: "r",
      logged: !(localStorage.getItem("oniric-user-token").length == 0),
      public: false,
    }
  }

  
  
  render() {
    return (
      <div>
        <Home />
        {
          this.state.logged
          &&
          <button onClick={() => {localStorage.setItem("oniric-user-token", ""); window.location.reload()}}>Logout</button>}
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
          {
            this.state.logged
            &&
            <div>

              <button onClick={() => {this.setState({public: false})}}>
                Personal
              </button>
              <button onClick={() => {this.setState({public: true})}}>
                Public
              </button>
            </div>
          }
          {
            (localStorage.getItem('oniric-user-token').length > 0) && !this.state.public 
            && 
            <PersonalTL user={localStorage.getItem("username")}/>
          }
          {
            (localStorage.getItem('oniric-user-token').length > 0) && this.state.public
            &&
            <PublicTL />
          }
          
        </div>
  
      </div>
      
    ); 
  }
}

export default App; 

