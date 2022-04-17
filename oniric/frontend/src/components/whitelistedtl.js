import axios from 'axios'
import React from 'react'

import Dream from './dream'

class WhitelistedTL extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            dreams: []
        }
    }

    componentDidMount() {
        alert(localStorage.getItem("oniric-user-token"))
        const response = axios({
            method: "GET",
            url: "http://localhost:3030/whitelist/dreams",
            headers: {
                "x-access-token": localStorage.getItem("oniric-user-token"),
            }
        }).then((res)=>{
            this.setState({dreams: res.data})
            console.log(this.state)
        }).catch((err)=>{
            alert("Some error occurred!", err)
            return
        })
    }

    render() {
        return (
            <div class="feed-container">
                {
                    this.state.dreams != undefined && this.state.dreams != []
                    &&
                    <div class="list-container">
                        {this.state.dreams.map((dream)=>{
                            <Dream data={dream} />
                        })}
                    </div>
                }
            </div>
        );
    }
}

export default WhitelistedTL