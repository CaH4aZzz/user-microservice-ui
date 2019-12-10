import React from 'react'

export default class Form extends React.Component{
    render() {
        return(
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="button-addon2" id="account"/>
                <div className="input-group-append">
                    <button className="btn btn-primary" onClick={this.sendData}>Find</button>
                </div>
            </div>
        )
    }

    sendData = () => {
        const username = document.getElementById("account");
        this.props.onButtonClick(username.value.trim());
    }
}