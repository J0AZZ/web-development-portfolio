import Register from "./components/register"
import Login from "./components/login"
import Home from "./components/home"
import PersonalTL from './components/personaltl'
import PublicTL from './components/publictl'
import CreateDream from "./components/createdream"
import WhitelistedTL from './components/whitelistedtl'

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
      public: true,
      whitelisted: false,
    }
  }

  
  
  render() {
    return (
      <div class="main_page">
        <Home />
        {
          this.state.logged
          &&
          <button onClick={
            () => {
              localStorage.setItem("oniric-user-token", ""); 
              window.location.reload()
            }}>Logout</button>}
        {
          !this.state.logged
          &&
          <div class="login_or_register_choice">
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
              <button onClick={() => {this.setState({create: true})}}>Save a Dream</button>
              <br></br>
              <button onClick={() => {this.setState({public: !this.state.public, whitelisted: false})}}>
                Personal
              </button>
              {/* <button onClick={() => {this.setState({whitelisted: !this.state.whitelisted})}}>
                Whitelisted
              </button> */}
              <button onClick={() => {this.setState({public: !this.state.public, whitelisted: false})}}>
                Public
              </button>
            </div>
          }
          {
            this.state.create 
            &&
            <CreateDream /> 
          }
          {
            !this.state.create && 
            (localStorage.getItem('oniric-user-token').length > 0) && 
            !this.state.public &&
            !this.state.whitelisted

            && 
            <PersonalTL user={localStorage.getItem("username")}/>
          }
          {/* {
            !this.state.create && 
            (localStorage.getItem('oniric-user-token').length > 0) && 
            this.state.whitelisted
            &&
            <WhitelistedTL />
          } */}
          {
            !this.state.create && 
            (localStorage.getItem('oniric-user-token').length > 0) && 
            this.state.public &&
            !this.state.whitelisted
            &&
            <PublicTL />
          }
          
        </div>
  
      </div>
      
    ); 
  }
}

export default App; 

