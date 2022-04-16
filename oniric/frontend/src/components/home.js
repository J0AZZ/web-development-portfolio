import React from 'react'
import ReactDOM from 'react-dom'
import createRoot from "react-dom/client"
import Register from "./register"
import Login from "./login"
import Header from "./header"



class Home extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div class="header">
                <Header />
                
            </div>
        );
    }
}

export default Home