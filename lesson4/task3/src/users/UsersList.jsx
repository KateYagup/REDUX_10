import React, { Component } from 'react';
import User from './User';
import { users } from './users';
import { connect } from 'react-redux';
// import * as counterActions from './counter/counter.actions';

class UsersList extends Component {

    render() {
        console.log(users);
        const page = 3;
        const min = (page - 1) * 3;
        const max = page * 3 - 1;
        const namesOnPage = users.slice(min, max + 1);;

        const names = namesOnPage.map(user => (
            <User name={user.name} age={user.age} />
        ))
        // const names = users.map(user => (
        //     <User name={user.name} age={user.age} />
        // ))

        return (
            <ul className="users">
                {names}
                {/* {users.map(user => (
                    <li>{user.name}</li>
                    <User name={user.name} age={user.age} />
                ))} */}

            </ul>
        )
    }
}

export default UsersList;