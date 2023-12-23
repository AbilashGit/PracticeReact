import React from 'react';
import UserForm from './components/UserForm'
import UsersComponent from './components/UsersComponent'
import UserApi from './data/UserApi';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        }
    }

    componentDidMount() {
        this.setState({users: UserApi.getAllUsers()})
    }

    addUser(user) {
        this.setState(prevState => ({
            users: [...prevState.users, user]
        }));
    }

    render() {
        return (
            <div>
                <h1>User Information</h1>
                <UserForm onAddUser={(user) => this.addUser(user)}/>
                <UsersComponent users={this.state.users}/>
            </div>
        );
    }
}