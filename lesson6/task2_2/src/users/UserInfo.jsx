import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { isFetchingSelector, userDataSelector } from './users.selectors';
import Spinner from './Spinner';


const UserInfo = ({ userData, isFetching }) => {
    if (isFetching) {
        return <Spinner />
    }
    if (!userData) {
        return null;
    }
    return (
        <div className='user'>
            <img
                alt="User Avantar"
                src={userData.avatar_url}
                className='user_avatar'
            />
            <div class="user__info">
                <span class="user__name">{userData.name}</span>
                <span class="user__location">{userData.location}</span>
            </div>
        </div>
    )
}

UserInfo.propTypes = {
    isFetching: PropTypes.bool.isRequired,
    userData: PropTypes.shape(),
}

UserInfo.defaultValue = {
    userData: null,
}

const mapState = state => {
    return {
        isFetching: isFetchingSelector(state),
        userData: userDataSelector(state),
    }
}

export default connect(mapState)(UserInfo);

// const UserInfo = ({ userData, isFetching }) => {
//     if (isFetching) {
//         return <Spinner />;
//     }
//     if (!userData) {
//         return null;
//     }
//     return (
//         <div className='user'>
//             <img
//                 alt="User Avantar"
//                 src={userData.avatar_url}
//                 className='user_avatar'
//             />
//             <div class="user__info">
//                 <span class="user__name">Apple</span>
//                 <span class="user__location">Cupertino, CA</span>
//             </div>
//         </div>
//     )
// }

// const mapSate = state => {
//     return {
//         isFetching: isFetchingSelector(state),
//     };
// }

// export default connect(mapSate)(UserInfo);