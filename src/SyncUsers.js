import React from 'react'
import { database } from './firebaseConfig'

const dbRef = database.ref('/jfddl6/randomusers')

class SyncUsers extends React.Component {
    state = {
        users: []
    }
    componentDidMount() {
        dbRef.on(
            'value',
            snapshot => { this.setState({ users: snapshot.val().results }) }
        )
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

export default SyncUsers