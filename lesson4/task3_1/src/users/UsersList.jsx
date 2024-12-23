import React, { Component } from 'react';
import User from './User';
import { users } from './users';
import { connect } from 'react-redux';
import Pagination from './Pagination';
import * as userActions from './users.actions';

// import * as counterActions from './counter/counter.actions';

class UsersList extends Component {

    render() {
        const { currentPage, increment, decrement } = this.props;
        // console.log(users);
        const page = 3;
        const min = (page - 1) * 3;
        const max = page * 3 - 1;
        const namesOnPage = users.slice(min, max + 1);
        // const currentPage = page;
        // const currentPage = 2;

        const names = namesOnPage.map(user => (
            <User key={user.id} name={user.name} age={user.age} />
        ))


        return (
            <ul className="users">
                <Pagination
                    currentPage={currentPage}
                    increment={increment}
                    decrement={decrement}
                />
                {names}


            </ul>
        )
    }
}

const mapSate = state => {
    return {
        currentPage: state.users.currentPage,
    }
}

const mapDispatch = {
    increment: userActions.increment,
    decrement: userActions.decrement,
}


export default connect(mapSate, mapDispatch)(UsersList);