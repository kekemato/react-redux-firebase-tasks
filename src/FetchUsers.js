import React from 'react'

class FetchUsers extends React.Component {
    state = {
        users: []
    }
    componentDidMount() {
        fetch('https://randomuser.me/api?results=10')
            .then(response => response.json())
            .then(data => this.setState({ users: data.results }))
    }

    render() {
        return (
            <div>
                {
                    this.state.users &&
                    this.state.users.map &&
                    this.state.users.map(user => <p key={user.login.uuid}>{user.email}</p>)
                }
            </div>
        )
    }
}

export default FetchUsers