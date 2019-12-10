import React from 'react'
import User from "./User";

export default class UserList extends React.PureComponent {
    state = {
        openUserId: null
    }

    render() {
        const userElements = this.props.users.map((user) =>
            <li key={user.username}>
                <User user={user}
                      isOpen={this.state.openUserId === user.username}
                      onButtonClick={this.handleClick.bind(this, user.username)}
                />
            </li>
        )
        return (
            <ul style={{listStyle: "none"}}>
                {userElements}
            </ul>
        )
    }

    handleClick = openUserId => this.setState({
        openUserId: this.state.openUserId === openUserId ? null : openUserId
    })
}