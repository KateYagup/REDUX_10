import React, { Component } from 'react';
import User from './User';
import { connect } from 'react-redux';
import Pagination from './Pagination';
import * as userActions from './users.actions';

class UsersList extends Component {

    render() {
        const { currentPage, users, goPrev, goNext, totalPages } = this.props;
        const names = users.map(user => (
            <User key={user.id} name={user.name} age={user.age} />
        ))

        return (
            <ul className="users">
                <Pagination
                    currentPage={currentPage}
                    goNext={goNext}
                    goPrev={goPrev}
                    totalPages={totalPages}
                />
                {names}
            </ul>
        )
    }
}

const mapSate = state => {
    console.log('state');
    console.log(state.totalPages);
    return {
        currentPage: state.currentPage,
        users: state.usersList,
        totalPages: state.totalPages
        // totalPages: 4
    }
}

const mapDispatch = {
    goNext: userActions.goNext,
    goPrev: userActions.goPrev,
}


export default connect(mapSate, mapDispatch)(UsersList);