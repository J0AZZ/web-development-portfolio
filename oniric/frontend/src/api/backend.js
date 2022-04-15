import axios from 'axios'

function req(method, url, data, token, callback) {
    axios({
        method: method,
        url: url,
        data: data,
    }).then((res) => {
        alert("RES: ", res)
    }).catch((err) => {
        alert("error: ", err.message)
    })
    
}

export default req