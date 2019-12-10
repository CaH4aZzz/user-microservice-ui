import React from 'react';


export default class User extends React.PureComponent {

    render() {
        const {user, isOpen, onButtonClick} = this.props

        const userData = <section className="card-text" style={{display: "flex", justifyContent: "space-between"}}>
            <p>{user.name}</p>
            <p>age: {user.age}</p>
            <p>sex: {user.gender}</p>
            <p>address: {user.address}</p>
        </section>;

        const about = isOpen && <section className="card-text">
            <p>
                <span style={{textDecoration: "underline"}}>About user:</span>
                &nbsp;
                {user.info}
            </p>
        </section>;

        return (
            <div className="card">
                <div className="card-header">
                    <h2 style={{display: "flex", justifyContent: "space-between"}}>
                        {user.username}
                        {doShowButton(user.info)}
                    </h2>
                </div>
                <div className="card-body">
                    <h6 className="card-subtitle text-muted">
                        {userData}
                    </h6>
                    {user.info ? about : 'User didn\'t provide any information :('}
                </div>
            </div>
        )

        function doShowButton(userInfo) {
            if (userInfo){
                return(
                    <button onClick={onButtonClick} className="btn btn-primary btn-sm float-right" >
                        {isOpen ? 'less' : 'more'}
                    </button>
                )
            }
        }
    }
}