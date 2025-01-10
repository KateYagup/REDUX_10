import React from 'react';
import { connect } from 'react-redux';
import { isFetchingSelector } from './users.selectors';
import Spinner from './Spinner';

const UserInfo = ({ userData, isFetching }) => {
    if (isFetching) {
        return <Spinner />;
    }
    if (!userData) {
        return null;
    }
    return (
        <div className='user'>
            <img
                alt="User Avantar"
                src={userData.avatar_url}
                className='user__avatar'
            />
            <div class="user__info">
                <span class="user__name">Apple</span>
                <span class="user__location">Cupertino, CA</span>
            </div>
        </div>
    )
}

const mapSate = state => {
    return {
        isFetching: isFetchingSelector(state),
    };
}

export default connect(mapSate)(UserInfo);