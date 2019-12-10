import React from 'react'
import UserList from "./UserList"
import 'bootstrap/dist/css/bootstrap.css'
import UserService from "../service/UserService";
import Form from "./Form";

export default class App extends React.Component {

    state = {
        reverted: false,
        users: [],
        count: 0
    };

    render() {
        return (
            <div className="container">
                <div className="jumbotron">
                    <h1 className="display-3">Users
                        &emsp;
                        <button className="btn btn-primary" onClick={this.getUsers}>Show users</button>
                        &emsp;
                        <button className="btn" onClick={this.revert}>Revert</button>
                        <Form onButtonClick={this.handleClick.bind(this)}/>
                    </h1>
                    {this.isUsers(this.state.users, this.state.count)}
                </div>
            </div>
        )
    }

    isUsers = (users, count) => {
        if (users.length > 0 && count > 0) {
            return <UserList users={this.state.reverted ? this.state.users.slice().reverse() : this.state.users}/>
        } else if (count === 0) {
            return <h1>Press "show users" button to receive all users </h1>
        }else{
            return <h1>There are no users currently</h1>
        }
    };

    revert = () => {
        this.setState({
            reverted: !this.state.reverted
        })
    };

    getUsers = async () => {
        await UserService.getAllUsers()
            .then((response) => {
                this.setState({
                    users: response.data,
                    count: this.state.count + 1
                })
            })
            .catch((error) => {
                alert(error.response.data.error.message)
            });
    };

    handleClick = async (childData) => {
        await UserService.getUser(childData)
            .then((response) => {
                this.setState({
                    users: Array.of(response.data)
                })
            })
            .catch((error) => {
                alert(error.response.data.error.message)
            })
    }
}