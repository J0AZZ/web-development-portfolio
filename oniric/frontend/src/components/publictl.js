import Dream from "./dream"

import React from 'react';
import axios from 'axios'

import './style/feed.css'

class PublicTL extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            dreams: []
        }
    }

    componentDidMount() {
        const fetchDreams = axios({
            method: "GET", 
            url: "http://localhost:3030/dreams",
            headers: {
                "x-access-token": localStorage.getItem("oniric-user-token")
            }
        }).then((res) => {
            this.setState({dreams: res.data})
            console.log("state: ", this.state)
        })
    }

    render() {
        return (
            <div class="feed-container">

                {

                    this.state.dreams.map((dream) => {
                        if(dream.private == 2)
                            return <Dream data={dream} />
                        else
                            return
                    })
                }
            </div>
        );
    }
}

export default PublicTL